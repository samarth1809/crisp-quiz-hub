import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Moon, Sun, GraduationCap } from "lucide-react";
import { QUESTIONS, type Question } from "@/data/questions";
import { formatTime, shuffle } from "@/lib/quiz-utils";
import { Setup, type Config } from "@/components/quiz/Setup";
import { Quiz } from "@/components/quiz/Quiz";
import { Results } from "@/components/quiz/Results";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Certify — Mock Test & Assessment Portal" },
      {
        name: "description",
        content:
          "Configure a timed practice assessment: choose level, category, question count and timer, then review your pass/fail result.",
      },
      { property: "og:title", content: "Certify — Mock Test & Assessment Portal" },
      {
        property: "og:description",
        content: "Timed practice assessments with instant scoring and answer review.",
      },
    ],
  }),
  component: Index,
});

type Screen = "setup" | "quiz" | "results";
const PER_QUESTION_SECONDS = 45;
const SECONDS_PER_QUESTION_OVERALL = 45;

function Index() {
  const [dark, setDark] = useState(false);
  const [screen, setScreen] = useState<Screen>("setup");
  const [config, setConfig] = useState<Config>({
    level: "medium",
    category: "cs",
    count: 10,
    timerMode: "overall",
    typeFilter: "mixed",
  });

  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [flagged, setFlagged] = useState<boolean[]>([]);
  const [index, setIndex] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const indexRef = useRef(0);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const pool = useMemo(
    () =>
      QUESTIONS.filter(
        (q) =>
          q.category === config.category &&
          q.level === config.level &&
          (config.typeFilter === "mixed" || q.type === config.typeFilter),
      ),
    [config.category, config.level, config.typeFilter],
  );

  const finish = useCallback(() => {
    setScreen("results");
  }, []);

  const goto = useCallback((i: number) => {
    indexRef.current = i;
    setIndex(i);
  }, []);

  const advance = useCallback(() => {
    const next = indexRef.current + 1;
    if (next >= questions.length) {
      finish();
    } else {
      goto(next);
      if (config.timerMode === "perQuestion") setRemaining(PER_QUESTION_SECONDS);
    }
  }, [questions.length, finish, goto, config.timerMode]);

  // countdown
  useEffect(() => {
    if (screen !== "quiz") return;
    const id = window.setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          if (config.timerMode === "overall") {
            finish();
            return 0;
          }
          advance();
          return PER_QUESTION_SECONDS;
        }
        return r - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [screen, config.timerMode, advance, finish]);

  const start = () => {
    const count = Math.min(config.count, pool.length);
    if (count === 0) return;
    const picked = shuffle(pool).slice(0, count);
    setQuestions(picked);
    setAnswers(Array(count).fill(null));
    setFlagged(Array(count).fill(false));
    goto(0);
    const t =
      config.timerMode === "overall" ? count * SECONDS_PER_QUESTION_OVERALL : PER_QUESTION_SECONDS;
    setTotalTime(count * SECONDS_PER_QUESTION_OVERALL);
    setRemaining(t);
    setScreen("quiz");
  };

  const retry = () => {
    setQuestions([]);
    setAnswers([]);
    setFlagged([]);
    goto(0);
    setRemaining(0);
    setScreen("setup");
  };

  const select = (choice: number) => {
    setAnswers((prev) => prev.map((a, i) => (i === index ? choice : a)));
  };

  const toggleFlag = () => {
    setFlagged((prev) => prev.map((f, i) => (i === index ? !f : f)));
  };

  const lowTime =
    screen === "quiz" &&
    remaining <=
      0.2 * (config.timerMode === "overall" ? totalTime : PER_QUESTION_SECONDS);

  const stepLabel =
    screen === "setup"
      ? "Setup"
      : screen === "quiz"
        ? `Question ${index + 1} of ${questions.length}`
        : "Results";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="grid size-8 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
              <GraduationCap className="size-4.5" />
            </span>
            <span className="truncate text-sm font-semibold tracking-tight">Certify Assessments</span>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <span className="hidden text-xs font-medium text-muted-foreground sm:inline">
              {stepLabel}
            </span>
            {screen === "quiz" && (
              <span
                className={`rounded-md border px-2.5 py-1 font-mono text-sm font-semibold tabular-nums transition-colors duration-150 ${
                  lowTime
                    ? "border-destructive bg-destructive-soft text-destructive"
                    : "border-border text-foreground"
                }`}
                aria-label="Time remaining"
              >
                {formatTime(remaining)}
              </span>
            )}
            <button
              type="button"
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle theme"
              className="grid size-9 place-items-center rounded-md border border-border transition-colors duration-150 hover:bg-secondary"
            >
              {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        {screen === "setup" && (
          <Setup config={config} setConfig={setConfig} available={pool.length} onStart={start} />
        )}
        {screen === "quiz" && (
          <Quiz
            questions={questions}
            index={index}
            answers={answers}
            flagged={flagged}
            onSelect={select}
            onToggleFlag={toggleFlag}
            onGoto={goto}
            onPrev={() => goto(Math.max(0, index - 1))}
            onNext={advance}
            onSubmit={finish}
          />
        )}
        {screen === "results" && (
          <Results
            questions={questions}
            answers={answers}
            flagged={flagged}
            timeTaken={totalTime - remaining}
            showTime={config.timerMode === "overall"}
            onRetry={retry}
          />
        )}
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Runs entirely in your browser. Results are not stored or shared.
        </p>
      </main>
    </div>
  );
}
