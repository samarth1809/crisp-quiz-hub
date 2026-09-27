import { useState } from "react";
import { Check, Flag, X, Minus } from "lucide-react";
import type { Question } from "@/data/questions";
import { formatTime } from "@/lib/quiz-utils";

function Stat({ label, value, tone }: { label: string; value: string; tone?: string }) {
  return (
    <div className="rounded-lg border border-border bg-card px-4 py-3 text-center">
      <p className={`text-xl font-semibold ${tone ?? ""}`}>{value}</p>
      <p className="mt-0.5 text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

export function Results({
  questions,
  answers,
  flagged,
  timeTaken,
  showTime,
  onRetry,
}: {
  questions: Question[];
  answers: (number | null)[];
  flagged: boolean[];
  timeTaken: number;
  showTime: boolean;
  onRetry: () => void;
}) {
  const [review, setReview] = useState(false);
  const total = questions.length;
  const correct = questions.filter((q, i) => answers[i] === q.correct).length;
  const skipped = answers.filter((a) => a === null).length;
  const incorrect = total - correct - skipped;
  const percent = Math.round((correct / total) * 100);
  const passed = percent >= 50;

  return (
    <div className="space-y-4">
      <div className="card-surface p-6 text-center sm:p-8">
        <span
          className={`inline-flex items-center rounded-full px-5 py-2 text-sm font-bold uppercase tracking-widest ${
            passed ? "bg-success text-success-foreground" : "bg-destructive text-destructive-foreground"
          }`}
        >
          {passed ? "Pass" : "Fail"}
        </span>
        <p className="mt-5 font-display text-5xl font-semibold tracking-tight sm:text-6xl">
          {correct} / {total}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Final score: {percent}% · Pass threshold 50%
        </p>

        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Correct" value={String(correct)} tone="text-success" />
          <Stat label="Incorrect" value={String(incorrect)} tone="text-destructive" />
          <Stat label="Skipped" value={String(skipped)} tone="text-warning" />
          <Stat label="Time taken" value={showTime ? formatTime(timeTaken) : "—"} />
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={() => setReview((r) => !r)}
            className="min-h-11 rounded-lg border border-border px-6 text-sm font-medium transition-colors duration-150 hover:bg-secondary"
          >
            {review ? "Hide review" : "Review answers"}
          </button>
          <button
            type="button"
            onClick={onRetry}
            className="min-h-11 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors duration-150 hover:bg-primary/90"
          >
            Retry test
          </button>
        </div>
      </div>

      {review && (
        <div className="space-y-3 fade-in-q">
          {questions.map((q, i) => {
            const given = answers[i];
            const isCorrect = given === q.correct;
            return (
              <div key={q.id} className="card-surface p-5">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                  <p className="min-w-0 text-sm font-semibold leading-relaxed">
                    {i + 1}. {q.text}
                  </p>
                  <span className="flex shrink-0 items-center gap-2">
                    {flagged[i] && (
                      <span className="inline-flex items-center gap-1 rounded-md bg-warning-soft px-2 py-1 text-[11px] font-medium text-warning-foreground">
                        <Flag className="size-3" /> Flagged
                      </span>
                    )}
                    <span
                      className={`grid size-6 place-items-center rounded-full ${
                        given === null
                          ? "bg-warning-soft text-warning-foreground"
                          : isCorrect
                            ? "bg-success-soft text-success"
                            : "bg-destructive-soft text-destructive"
                      }`}
                    >
                      {given === null ? (
                        <Minus className="size-3.5" />
                      ) : isCorrect ? (
                        <Check className="size-3.5" />
                      ) : (
                        <X className="size-3.5" />
                      )}
                    </span>
                  </span>
                </div>

                <div className="mt-3 space-y-2">
                  {q.options.map((opt, oi) => {
                    const isAnswer = oi === q.correct;
                    const isGiven = oi === given;
                    return (
                      <div
                        key={oi}
                        className={`rounded-lg border px-3 py-2 text-sm ${
                          isAnswer
                            ? "border-success bg-success-soft text-foreground"
                            : isGiven
                              ? "border-destructive bg-destructive-soft text-foreground"
                              : "border-border text-muted-foreground"
                        }`}
                      >
                        <span className="font-medium">{String.fromCharCode(65 + oi)}.</span> {opt}
                        {isAnswer && <span className="ml-2 text-xs font-medium">Correct answer</span>}
                        {isGiven && !isAnswer && (
                          <span className="ml-2 text-xs font-medium">Your answer</span>
                        )}
                      </div>
                    );
                  })}
                  {given === null && (
                    <p className="text-xs font-medium text-warning-foreground">
                      You skipped this question.
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
