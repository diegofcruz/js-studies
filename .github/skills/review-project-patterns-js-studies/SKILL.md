---
name: review-project-patterns-js-studies
description: "Project-pattern review lens for js-studies diffs. Use to verify structure, naming, and educational-file organization consistency."
---

# Review Project Patterns JS Studies

Use this skill as a focused lens while reviewing `<BASE_BRANCH>...HEAD`.

## Scope

Focus on structural consistency with this repository:

1. Topic organization (`<area>/<topic>/test<n>.ts`, exercises docs placement)
2. TypeScript-first conventions and explicit typing where code is changed
3. Consistent educational progression style in changed docs/files
4. Reuse of nearby utilities over duplicated logic

## Inputs

You should review with:

- Base branch name
- Current branch name
- `git diff --stat` output
- `git diff -U3` output

## Review Rules

1. Use evidence from changed lines and nearby context only.
2. Flag concrete deviations from repository patterns.
3. Avoid generic style comments not tied to changed content.
4. If no issue exists, return `Sem achados`.

## Output Schema

Per finding, provide:

- severity: `alta|media|baixa`
- area: `project-patterns`
- title: short issue title
- evidence: file path and changed snippet summary
- impact: practical consequence
- recommendation: concrete fix
