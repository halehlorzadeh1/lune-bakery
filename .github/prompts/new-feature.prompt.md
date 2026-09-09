---
mode: agent
description: Guide through the full spec-driven workflow for a new Lune Bakery feature
---

# New Feature — Spec-Driven Workflow

This prompt guides you through the **full spec-driven process** for a new feature.
No code is written until the spec is complete and confirmed.

---

## Step 1 — Gather requirements

Ask me the following questions (all at once, not one by one):

1. What is the feature called?
2. What user problem does it solve? (one sentence)
3. Who is the user — customer, admin, or both?
4. What does success look like? (what can the user do that they couldn't before?)
5. Does this require backend changes (new or modified endpoints)?
6. Does this require frontend changes (new or modified components)?
7. Is there anything that is explicitly out of scope?

Wait for my answers before continuing.

---

## Step 2 — Write the feature spec

Using my answers, create a new file at:
```
specs/spec-{kebab-case-feature-name}.md
```

Populate it using the structure from `specs/FEATURE_SPEC_TEMPLATE.md`. Fill in every section:

- **Meta** — author (me), today's date, status = `Draft`, suggested branch name
- **Problem / Goal** — one paragraph, the "why"
- **User story** — As a / I want / So that
- **Acceptance criteria** — a checklist; every item must be observable and testable
- **API changes** — list new/modified endpoints; include the OpenAPI schema snippets
- **UI / UX** — which components change, what each state looks like
- **Out of scope** — explicit list
- **Open questions** — anything that needs a decision before coding starts

After writing the spec, show it to me and ask: *"Does this spec look right? Any changes before we proceed?"*

Do not continue to Step 3 until I confirm.

---

## Step 3 — Update openapi.yaml

If the feature has API changes:

1. Open `openapi.yaml`
2. Add or modify the relevant paths and schemas to match the spec
3. Show me the diff and ask: *"Does the API contract look correct?"*

Do not continue to Step 4 until I confirm.

---

## Step 4 — Implementation plan

Break the feature into an ordered task list. For each task include:
- What file is created or modified
- What the task does in one line
- Whether it's blocked by another task

Format:
```
[ ] 1. Create Pydantic model `MenuItemWrite` in `backend/models/menu.py`
[ ] 2. Create `GET /api/admin/menu` route in `backend/routes/admin.py` — blocked by #1
[ ] 3. Create `AdminMenu` React component in `frontend/src/components/AdminMenu/` — blocked by #2
```

Ask me: *"Does this plan look right? Should I start implementing?"*

Do not write any implementation code until I confirm.

---

## Step 5 — Implement

Work through the task list top to bottom. For each task:

1. Mark it in progress
2. Implement it following the rules in `.github/copilot-instructions.md`
3. For frontend components — follow `/new-component` conventions
4. For backend routes — follow `/new-api-route` conventions
5. Mark it done before moving to the next

---

## Step 6 — Validate against acceptance criteria

Go through the acceptance criteria checklist from the spec.
For each item, describe how to verify it (manual test step or automated test).
Update the spec status to `Implemented`.

---

## Reminders throughout

- The spec is the source of truth — if implementation diverges, update the spec first, then the code
- `openapi.yaml` must stay in sync with the implementation at all times
- No hardcoded colours, secrets, or URLs
- All three UI states (loading, error, success) must be handled in every data-fetching component
