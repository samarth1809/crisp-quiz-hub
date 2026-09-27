# Test Master Pro

MASTER PROMPT — DYNAMIC MOCK-TEST / QUIZ WEB APPLICATION

Build a frontend-only quiz web application.

PROJECT TYPE

Build this as a FRONTEND-ONLY dynamic web application using HTML, CSS, and JavaScript (React is fine).

DO NOT use:

A backend server

A database

User accounts or login

Server-side storage of scores or answers

All quiz logic — question selection, timer, scoring, pass/fail — must run entirely in the browser using JavaScript. Store the question bank as a local JSON/array inside the app, not fetched from an external API.

"Dynamic" here means the page content changes in real time based on user choices (selected category, level, timer countdown, live score) — not that it needs a backend.

CORE CONCEPT

The app is a customizable mock-test/quiz platform. Before starting, the user configures their own test:

LEVEL: Easy / Medium / Hard

CATEGORY: choose from at least 3 topic categories relevant to [your subject — e.g. General Knowledge, Computer Science, Current Affairs]

NUMBER OF QUESTIONS: e.g. 10 / 20 / 30

TIMER: overall test duration OR per-question timer (pick one mode)

QUESTION TYPE: Multiple Choice / True-False / Mixed

THEME: Light mode / Dark mode toggle

A test is only marked PASS if the score is 50% or higher. Below that, it's a FAIL, with an option to retry.

PAGES / SCREENS

Build these as distinct screens/states within the app (single-page is fine here, since this is one interactive tool, not a multi-page site):

SCREEN 1 — SETUP

Choose level, category, question count, timer mode, question type, and theme

Show a short summary of the chosen settings before starting (e.g. "Medium · Computer Science · 20 Questions · 15 min")

"Start Test" button

SCREEN 2 — QUIZ IN PROGRESS

Show one question at a time (multiple choice, 4 options)

Show a live countdown timer

Show current question number / total (e.g. "Question 4 of 20")

Next/Previous navigation (or auto-advance on selection — pick one)

Do not allow submitting with no answer selected, but allow skipping if you choose to support that

"Flag for review" option on each question, with a small marker shown in the question navigator

SCREEN 3 — RESULTS

Final score (e.g. "12 / 20 — 60%")

Clear PASS or FAIL badge (pass threshold = 50%)

Breakdown: correct vs incorrect vs skipped count

Time taken (if using an overall timer)

Option to review answers (show which were right/wrong, with the correct answer revealed, flagged questions highlighted)

"Retry" button that returns to Screen 1

TIMER BEHAVIOR

If using an overall timer: when time runs out, auto-submit whatever has been answered so far and go straight to Results.

If using a per-question timer: when time runs out on a question, mark it unanswered/incorrect and auto-advance to the next question.

Show the timer clearly at all times during the quiz (e.g. top corner, changing color when time is running low).

SCORING LOGIC

Each question has exactly one correct answer.

Score = (correct answers ÷ total questions) × 100, rounded to the nearest whole percent.

50% or higher = PASS. Below 50% = FAIL.

Do not persist scores between sessions — reset on retry or page reload (no localStorage required unless you want the setup preferences remembered).

VISUAL STYLE — PROFESSIONAL UI

This should look like a genuine corporate assessment/certification platform (think: a professional exam portal, not a casual quiz game or app).

Layout:

Centered card-based layout with generous padding, sitting on a soft neutral background (not pure white — a very light grey/off-white)

A clean top bar showing the app name/logo on the left and the current step (Setup / Question X of Y / Results) on the right

Consistent max-width container (e.g. ~720px) so content never stretches edge-to-edge on large screens

Subtle card shadows and 1px borders instead of heavy drop-shadows or glow effects

Color palette:

Primary neutral: charcoal or dark slate text on white/light-grey cards

One confident accent color for primary buttons and progress indicators (e.g. a deep blue or indigo) — avoid bright/neon tones

Semantic colors used ONLY for feedback: green for correct/pass, red for incorrect/fail, amber for flagged/skipped

No gradients, no glassmorphism, no neon, no dark-mode-by-default (dark mode is a user toggle, not the base theme)

Typography:

A clean sans-serif (e.g. Inter, Roboto, or system-ui) with clear size hierarchy: large heading for question text, smaller regressive sizes for meta info like timer/question count

Comfortable line-height and letter-spacing — this should read like a well-typeset form, not cramped text

Components:

Answer options as full-width selectable cards/buttons with a visible selected-state border and subtle hover state — not plain radio buttons

A slim progress bar at the top of the quiz screen showing overall completion

Timer displayed as a clean numeric countdown (not a flashy animated ring unless it's simple and subtle), changing to the amber/red accent only in the final 20% of time

Results screen uses a large, clear PASS/FAIL badge as the visual focal point, with score and breakdown presented in a simple stat-card row underneath

Motion:

Keep transitions minimal and fast (150–250ms fades/slides between questions) — no bouncy, playful, or game-like animation

No confetti, no celebratory animation on pass — keep the tone consistently professional throughout, including on Results

CONTENT REQUIREMENTS

Write real, correct multiple-choice questions for your chosen categories — do not leave placeholder text like "Question 1" in the final version.

Make sure exactly one option per question is correct, and double-check the "correct answer" logic matches what's actually marked correct in the code.

Keep question wording clear and unambiguous.

INTERACTIONS TO INCLUDE

Category, level, question type, and theme selection (before starting)

Live countdown timer

Answer selection with visible feedback (selected option highlighted)

Flag/unflag a question for later review

Light/dark theme toggle

Score calculation

Pass/Fail result screen

Answer review (correct vs your answer, flagged questions marked)

Retry / restart flow

RESPONSIVE DESIGN

The quiz must work correctly on mobile, tablet, and desktop. Buttons and answer options must be large enough to tap comfortably on a phone. The timer and question counter must stay visible without overlapping content on small screens.

FINAL CHECK

Before finishing, confirm:

Setup screen lets you choose level, category, question count, timer, question type, and theme.

Timer counts down correctly and auto-submits/auto-advances at zero.

Score is calculated correctly (spot-check by answering all correctly, then all incorrectly).

50% threshold correctly shows PASS at 50%+ and FAIL below it.

Flagged questions are visually marked and shown correctly in the review screen.

Light/dark theme toggle works and doesn't break layout or contrast.

Retry button fully resets the quiz state.

No backend, database, login, or external API calls are used.

Works on mobile screen sizes without layout breaking.

Visual style matches a professional exam-portal look — no game-like colors, neon, or celebratory animation.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://crisp-quiz-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9c1e93fd-fd65-4751-9496-8b63c1aa9d42).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
