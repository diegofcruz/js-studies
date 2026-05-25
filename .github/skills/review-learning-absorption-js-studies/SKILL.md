---
name: review-learning-absorption-js-studies
description: "Learning-first review lens for js-studies diffs. Use to verify whether exercises and LeetCode content are actually absorbable by the student through progression, explanations, edge cases, and key insights."
---

# Review Learning Absorption JS Studies

Use this skill as a focused lens while reviewing `<BASE_BRANCH>...HEAD`.

## Scope

Evaluate whether the changed content helps knowledge absorption:

1. Clear progression with one concept at a time
2. Explicit `why` behind non-obvious choices
3. Failure paths, edge cases, and incorrect usage coverage
4. Correctness and complexity awareness for algorithms
5. Observable outcomes and clear key insight

## Inputs

You should review with:

- Base branch name
- Current branch name
- `git diff --stat` output
- `git diff -U3` output
- `.github/copilot-instructions.md`

## Review Rules

1. Review only changed lines and immediate diff context.
2. Flag only actionable issues tied to evidence.
3. Prioritize gaps that weaken understanding retention.
4. If no issue exists, return `Sem achados`.

## Output Schema

Per finding, provide:

- severity: `alta|media|baixa`
- area: `learning-absorption`
- title: short issue title
- evidence: file path and changed snippet summary
- impact: learning consequence
- recommendation: concrete fix
