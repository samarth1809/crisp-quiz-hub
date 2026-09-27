import { Flag } from "lucide-react";
import type { Question } from "@/data/questions";

export function Quiz({
  questions,
  index,
  answers,
  flagged,
  onSelect,
  onToggleFlag,
  onGoto,
  onPrev,
  onNext,
  onSubmit,
}: {
  questions: Question[];
  index: number;
  answers: (number | null)[];
  flagged: boolean[];
  onSelect: (choice: number) => void;
  onToggleFlag: () => void;
  onGoto: (i: number) => void;
  onPrev: () => void;
  onNext: () => void;
  onSubmit: () => void;
}) {
  const q = questions[index];
  if (!q) return null;
  const answered = answers.filter((a) => a !== null).length;
  const progress = (answered / questions.length) * 100;
  const isLast = index === questions.length - 1;

  return (
    <div className="space-y-4">
      <div className="card-surface overflow-hidden">
        <div className="h-1.5 w-full bg-secondary">
          <div
            className="h-full bg-primary transition-[width] duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
            <p className="min-w-0 truncate text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Question {index + 1} of {questions.length}
            </p>
            <button
              type="button"
              onClick={onToggleFlag}
              aria-pressed={flagged[index]}
              className={`inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-lg border px-3 text-xs font-medium transition-colors duration-150 ${
                flagged[index]
                  ? "border-warning bg-warning-soft text-warning-foreground"
                  : "border-border text-muted-foreground hover:bg-secondary"
              }`}
            >
              <Flag className="size-3.5" />
              {flagged[index] ? "Flagged" : "Flag for review"}
            </button>
          </div>

          <div key={q.id} className="fade-in-q">
            <h2 className="mt-4 font-display text-xl font-semibold leading-relaxed sm:text-2xl">{q.text}</h2>

            <div className="mt-6 space-y-3">
              {q.options.map((opt, i) => {
                const selected = answers[index] === i;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => onSelect(i)}
                    className={`flex min-h-12 w-full items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm leading-relaxed transition-colors duration-150 ${
                      selected
                        ? "border-primary bg-primary-soft text-foreground"
                        : "border-border bg-card hover:bg-secondary"
                    }`}
                  >
                    <span
                      className={`grid size-6 shrink-0 place-items-center rounded-md border text-xs font-semibold ${
                        selected ? "border-primary bg-primary text-primary-foreground" : "border-border"
                      }`}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="min-w-0">{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
            <button
              type="button"
              onClick={onPrev}
              disabled={index === 0}
              className="min-h-11 rounded-lg border border-border px-5 text-sm font-medium transition-colors duration-150 hover:bg-secondary disabled:opacity-40"
            >
              Previous
            </button>
            {isLast ? (
              <button
                type="button"
                onClick={onSubmit}
                className="min-h-11 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors duration-150 hover:bg-primary/90"
              >
                Submit Test
              </button>
            ) : (
              <button
                type="button"
                onClick={onNext}
                className="min-h-11 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors duration-150 hover:bg-primary/90"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="card-surface p-4 sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Question navigator
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {questions.map((_, i) => {
            const isCurrent = i === index;
            const isAnswered = answers[i] !== null;
            return (
              <button
                key={i}
                type="button"
                onClick={() => onGoto(i)}
                className={`relative size-10 rounded-lg border text-xs font-semibold transition-colors duration-150 ${
                  isCurrent
                    ? "border-primary bg-primary text-primary-foreground"
                    : isAnswered
                      ? "border-primary/40 bg-primary-soft text-primary"
                      : "border-border bg-card text-muted-foreground hover:bg-secondary"
                }`}
              >
                {i + 1}
                {flagged[i] && (
                  <span className="absolute -right-1 -top-1 size-2.5 rounded-full bg-warning" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
