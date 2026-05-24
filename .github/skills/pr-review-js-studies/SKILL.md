---
name: pr-review-js-studies
description: "Review changes between current branch and a base branch for this js-studies repository. Use when the user asks to compare branches, review git diff, validate project patterns, check development best practices, or assess exercise/leetcode coverage and understanding. Defaults to main when the user does not provide a base branch."
---

# PR Review JS Studies

Execute this workflow when the user asks for branch-based code review.

## Goal

Generate a review report based on the diff between current branch and base branch, with findings prioritized by severity (`alta`, `media`, `baixa`) in three dimensions:

1. Project patterns
2. Development best practices
3. Exercise/LeetCode coverage and understanding

## Step-by-step Workflow

1. Resolve the base branch.
   If the user did not provide one, use `main`.

2. Validate git context before diff.
   Run commands in order:

```bash
git rev-parse --is-inside-work-tree
git rev-parse --abbrev-ref HEAD
git show-ref --verify --quiet refs/heads/<BASE_BRANCH> || git show-ref --verify --quiet refs/remotes/origin/<BASE_BRANCH>
```

3. Build the comparison diff.
   Use the current branch as target and base branch as source.

```bash
git diff --stat <BASE_BRANCH>...HEAD
git diff -U3 <BASE_BRANCH>...HEAD
```

4. Handle no-change scenario.
   If diff is empty, stop and return:
   `Sem achados: não há diferenças entre <BASE_BRANCH> e a branch atual.`

5. Create three focused review tracks using subagents in parallel.
   Use one subagent for each template in this folder:

- `subagents/project-patterns.md`
- `subagents/dev-best-practices.md`
- `subagents/exercise-leetcode-coverage.md`

Each subagent input must include:

- Base branch name
- Current branch name
- `git diff --stat` output
- Relevant `git diff -U3` content

6. Consolidate outputs.
   Merge findings from all subagents, remove duplicates, and sort by severity:

1. `alta`
1. `media`
1. `baixa`

1. Return final output in Portuguese.
   Output must contain only prioritized findings and be concise.

## Output Contract

Use this exact structure:

```md
## Findings

### Alta

- [area] descrição objetiva do problema
  Evidência: caminho/arquivo + trecho relevante
  Impacto: por que importa
  Recomendação: ação concreta

### Media

- ...

### Baixa

- ...
```

If a severity has no issues, include:

`- Sem achados.`

## Rules

1. Review only what exists in `<BASE_BRANCH>...HEAD` diff.
2. Do not invent files, tests, or behavior not present in the diff.
3. Do not propose auto-fix or commit operations.
4. Keep recommendations actionable and tied to evidence.
5. Prefer TypeScript and educational-repo conventions from `.github/copilot-instructions.md`.
