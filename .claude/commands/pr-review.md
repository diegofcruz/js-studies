# PR Review — js-studies

Review the current branch against the base branch: **$ARGUMENTS** (default: `main` when no argument is provided).

Generate a concise review report in **Portuguese**, prioritizing findings by severity (`alta`, `media`, `baixa`) across three lenses:

1. **Learning absorption** — primary lens
2. **Project patterns**
3. **Dev best practices**

---

## Step-by-step Workflow

### 1. Resolve base branch

If no argument was provided, use `main` as the base branch.

### 2. Validate git context

Run these in order:

```bash
git rev-parse --is-inside-work-tree
git rev-parse --abbrev-ref HEAD
```

Verify the base branch exists:

```bash
git show-ref --verify --quiet refs/heads/<BASE_BRANCH> || git show-ref --verify --quiet refs/remotes/origin/<BASE_BRANCH>
```

### 3. Collect the diff

```bash
git diff --stat <BASE_BRANCH>...HEAD
git diff -U3 <BASE_BRANCH>...HEAD
```

If diff is empty, stop and return:

> `Sem achados: não há diferenças entre <BASE_BRANCH> e a branch atual.`

### 4. Run all three review lenses on the same diff

Evaluate all lenses in a single pass. Do not call sub-agents or external tools.

---

## Lens 1 — Learning Absorption

Evaluate whether the changed content helps knowledge absorption:

- Clear progression with one concept at a time
- Explicit `why` behind non-obvious choices
- Failure paths, edge cases, and incorrect usage coverage
- Correctness and complexity awareness for algorithms
- Observable outcomes (`What to observe` section) and a clear `Key insight`
- Full, runnable solutions — no stubs, no TODO comments

Flag these as `alta`:
- Missing failure-path exercises for a topic
- Solutions with stubs or TODO instead of working code
- Key insight absent or vague
- Exercise mixes more than one new concept

Flag these as `media`:
- Weak or missing `What to observe` explanation
- Steps that skip non-obvious setup
- `why` is stated but not traced through runtime/compiler mechanics

Flag these as `baixa`:
- Minor clarity improvements to exercise goals or steps
- Incomplete suggested completion paths

---

## Lens 2 — Project Patterns

Evaluate structural consistency with this repository:

- Topic organization: `<area>/<topic>/test<n>.ts`, exercise docs in `<area>/exercises/<topic>-exercises.md`
- TypeScript-first conventions and explicit typing where code is changed
- Consistent educational progression style in changed docs/files
- No duplicated logic — reuse nearby utilities when they exist (e.g., `utils.ts`)

Flag these as `alta`:
- Working files placed outside their expected `<area>/<topic>/` directory
- Exercise file placed outside `<area>/exercises/`
- Mixed `.js` and `.ts` without justification

Flag these as `media`:
- Inconsistent test file naming (e.g., `exercise1.ts` instead of `test1.ts`)
- Missing explicit TypeScript types where changed code introduces new values

Flag these as `baixa`:
- Minor structural deviations that do not affect navigation or discoverability

---

## Lens 3 — Dev Best Practices

Evaluate maintainability, clarity, and defensive quality:

- Readability and naming clarity
- Error handling and defensive checks
- Type safety: no `any`, proper narrowing instead of type assertions
- Simplicity: no over-engineering for a single-file exercise context
- Alignment with code style in `CLAUDE.md`

Flag these as `alta`:
- Use of `any` where a typed alternative exists
- Unhandled promise rejections in exercise code
- Incorrect TypeScript (code that would fail `tsc`)

Flag these as `media`:
- `let` used where `const` is possible
- `.then()` chains in post-Promises topic exercises (should use `async/await`)
- Exercises with external dependencies not justified by the topic

Flag these as `baixa`:
- Minor naming inconsistencies
- Redundant `console.log` left from debugging

---

## Consolidate and Output

1. Merge all findings from the three lenses.
2. Remove duplicates (keep the highest severity when a finding appears in multiple lenses).
3. Sort by severity: `alta` → `media` → `baixa`.
4. Output in Portuguese only.

Use this exact structure:

```md
## Findings

### Alta

- [lens] título curto do problema
  Evidência: caminho/arquivo:linha — trecho relevante
  Impacto: por que isso prejudica o aprendizado ou a qualidade
  Recomendação: ação concreta para corrigir

### Media

- ...

### Baixa

- ...
```

If a severity has no findings, include: `- Sem achados.`

---

## Rules

1. Review only what exists in the `<BASE_BRANCH>...HEAD` diff.
2. Do not invent files, behavior, or issues not present in the diff.
3. Prioritize learning-absorption findings when severity is tied.
4. Do not propose auto-fix or commit operations.
5. Keep recommendations actionable and tied to specific evidence.
6. Do not generate markdown outside the output contract above.
