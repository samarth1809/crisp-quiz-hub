import type { Category, Level } from "@/data/questions";
import { CATEGORY_LABELS, LEVEL_LABELS } from "@/data/questions";

export type TimerMode = "overall" | "perQuestion";
export type TypeFilter = "mcq" | "truefalse" | "mixed";

export interface Config {
  level: Level;
  category: Category;
  count: number;
  timerMode: TimerMode;
  typeFilter: TypeFilter;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
      {children}
    </div>
  );
}

function Options<T extends string | number>({
  value,
  options,
  onChange,
}: {
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={String(o.value)}
            type="button"
            onClick={() => onChange(o.value)}
            className={`min-h-11 flex-1 basis-[calc(50%-0.25rem)] rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors duration-150 sm:basis-auto ${
              active
                ? "border-primary bg-primary-soft text-primary"
                : "border-border bg-card text-foreground hover:bg-secondary"
            }`}
            aria-pressed={active}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

export function Setup({
  config,
  setConfig,
  available,
  onStart,
}: {
  config: Config;
  setConfig: (c: Config) => void;
  available: number;
  onStart: () => void;
}) {
  const effectiveCount = Math.min(config.count, available);
  const durationMin = Math.max(1, Math.round((effectiveCount * 45) / 60));

  const summary = [
    LEVEL_LABELS[config.level],
    CATEGORY_LABELS[config.category],
    `${effectiveCount} Questions`,
    config.timerMode === "overall" ? `${durationMin} min total` : "45 s per question",
  ].join(" · ");

  return (
    <div className="card-surface p-6 sm:p-8">
      <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Configure your assessment</h1>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Select the parameters below. The test begins as soon as you start and cannot be paused.
      </p>

      <div className="mt-8 space-y-6">
        <Field label="Difficulty level">
          <Options
            value={config.level}
            onChange={(level) => setConfig({ ...config, level })}
            options={(["easy", "medium", "hard"] as Level[]).map((l) => ({
              value: l,
              label: LEVEL_LABELS[l],
            }))}
          />
        </Field>

        <Field label="Category">
          <Options
            value={config.category}
            onChange={(category) => setConfig({ ...config, category })}
            options={(["general", "cs", "current"] as Category[]).map((c) => ({
              value: c,
              label: CATEGORY_LABELS[c],
            }))}
          />
        </Field>

        <Field label="Question type">
          <Options
            value={config.typeFilter}
            onChange={(typeFilter) => setConfig({ ...config, typeFilter })}
            options={[
              { value: "mcq" as const, label: "Multiple choice" },
              { value: "truefalse" as const, label: "True / False" },
              { value: "mixed" as const, label: "Mixed" },
            ]}
          />
        </Field>

        <Field label="Number of questions">
          <Options
            value={config.count}
            onChange={(count) => setConfig({ ...config, count })}
            options={[5, 10, 20, 30].map((n) => ({ value: n, label: String(n) }))}
          />
          <p className="text-xs text-muted-foreground">
            {available} question{available === 1 ? "" : "s"} available for this selection
            {config.count > available ? ` — the test will use ${available}.` : "."}
          </p>
        </Field>

        <Field label="Timer mode">
          <Options
            value={config.timerMode}
            onChange={(timerMode) => setConfig({ ...config, timerMode })}
            options={[
              { value: "overall" as const, label: "Overall duration" },
              { value: "perQuestion" as const, label: "Per question" },
            ]}
          />
        </Field>
      </div>

      <div className="mt-8 rounded-lg border border-border bg-secondary px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Summary</p>
        <p className="mt-1 text-sm font-medium">{summary}</p>
        <p className="mt-1 text-xs text-muted-foreground">Pass threshold: 50%</p>
      </div>

      <button
        type="button"
        onClick={onStart}
        disabled={available === 0}
        className="mt-6 min-h-12 w-full rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors duration-150 hover:bg-primary/90 disabled:opacity-50"
      >
        Start Test
      </button>
      {available === 0 && (
        <p className="mt-2 text-center text-xs text-destructive">
          No questions match this combination. Try another type or level.
        </p>
      )}
    </div>
  );
}
