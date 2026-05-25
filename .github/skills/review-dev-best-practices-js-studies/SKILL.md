---
name: review-dev-best-practices-js-studies
description: "Development best-practices review lens for js-studies diffs. Use to evaluate maintainability, clarity, and defensive quality in changed code and docs."
---

# Review Dev Best Practices JS Studies

Use this skill as a focused lens while reviewing `<BASE_BRANCH>...HEAD`.

## Scope

Evaluate changed content for:

1. Readability and naming clarity
2. Error handling and defensive checks
3. Type safety and avoidance of `any`
4. Simplicity and maintainability of the chosen approach
5. Alignment with `.github/copilot-instructions.md`

## Inputs

You should review with:

- Base branch name
- Current branch name
- `git diff --stat` output
- `git diff -U3` output
- `.github/copilot-instructions.md`

## Review Rules

1. Report only actionable issues tied to evidence.
2. Prioritize defects and regression risk over micro-style suggestions.
3. Avoid speculative findings without changed-line support.
4. If no issue exists, return `Sem achados`.

## Output Schema

Per finding, provide:

- severity: `alta|media|baixa`
- area: `dev-best-practices`
- title: short issue title
- evidence: file path and changed snippet summary
- impact: practical consequence
- recommendation: concrete fix
