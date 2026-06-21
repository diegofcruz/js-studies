# New Topic — Generate Exercise List

Generate a complete, deep-dive exercise list for the topic: **$ARGUMENTS**

The argument format is: `<topic-name> [area]`

- `topic-name`: the topic to cover (e.g., `event-emitter`, `async-await`, `streams`)
- `area` (optional): the repository area — `nodejs`, `react`, `vue`, or `nestjs`. Defaults to `nodejs`.

---

## Workflow

### 1. Parse arguments

Extract `topic-name` and `area` from `$ARGUMENTS`. If area is not provided, use `nodejs`.

### 2. Read context

Before generating exercises, read:

- `CLAUDE.md` — exercise format rules, code style, depth protocol
- `TOPICS.md` — to understand where this topic fits in the learning path and what prerequisites exist
- Any existing exercise files in `<area>/exercises/` — to match the style exactly

### 3. Determine prerequisites

Based on `TOPICS.md` and the existing exercises, identify:
- What topics the student has already completed (checked items in `TOPICS.md`)
- What the student can assume knowledge of in this new topic
- What concepts must be re-explained vs. referenced

### 4. Design the exercise sequence

Plan 10–14 exercises that follow this arc:

1. **Foundation** (exercises 1–3): Core concept from scratch. What it is, why it exists, basic API.
2. **Mechanics** (exercises 4–6): How it behaves internally. State changes, ordering, edge cases.
3. **Composition** (exercises 7–9): Combining with other concepts. Real-world patterns.
4. **Failure paths** (exercises 10–11): Intentional breakage — wrong usage, uncaught errors, common mistakes.
5. **Production patterns** (exercises 12–14): Advanced usage found in real codebases.

Rules:
- One concept per exercise
- Every exercise has a full, runnable TypeScript solution — no stubs
- At least 2 exercises must cover failure paths or edge cases explicitly
- The final exercise or a bonus must integrate multiple concepts from the topic
- No external dependencies unless the topic is about a specific library

### 5. Write the exercise file

Output the complete markdown file to: `<area>/exercises/<topic-name>-exercises.md`

Follow the exact format from `CLAUDE.md`:

```md
# <Topic Name> — Deep Dive Exercises

A hands-on guide to understanding every aspect of <topic>. Work through each exercise in order — each builds on the previous one.

---

## Setup

All exercises go inside `<area>/<topic>/test<n>.ts`. Run each with:

\`\`\`bash
npx ts-node <area>/<topic>/test<n>.ts
\`\`\`

Create the folder before starting:

\`\`\`bash
mkdir -p <area>/<topic>
\`\`\`

---

## Exercise 1 — <Title>
...
```

### 6. Create the first test file

After generating the exercise list, also create `<area>/<topic>/test1.ts` with the solution from Exercise 1.

This gives the student an immediate starting point.

### 7. Update TOPICS.md

Check if the topic appears in `TOPICS.md`. If it does, do not modify the file (the student marks it complete themselves). If the topic is entirely new and not listed, add it under the appropriate section as an unchecked item:

```md
- [ ] <Topic Name>
```

---

## Quality Checklist Before Writing

Before writing the file, verify mentally:

- [ ] The sequence builds progressively — no exercise assumes knowledge from a later one
- [ ] The failure-path exercises are explicit: the student is told to break something intentionally
- [ ] Every `Key insight` is one sentence that captures the entire mental model shift
- [ ] Every solution is runnable with `npx ts-node` without additional setup
- [ ] No `any` in solutions — only typed alternatives
- [ ] Each exercise is truly independent: no shared state between files that isn't re-declared

---

## Output

After creating the files, summarize:

1. Path to the exercise file created
2. Path to `test1.ts` created
3. Number of exercises generated
4. The suggested completion path (which exercises to do in which order)
5. Any prerequisites the student should complete first based on `TOPICS.md`
