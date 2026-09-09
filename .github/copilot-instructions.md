# Lune Bakery — Copilot Instructions

You are working on **Lune Bakery**, a French pâtisserie website.
Read this file in full before generating any code.

---

## Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, MUI (Material UI) v5 |
| Backend | Python 3.11+, FastAPI, Pydantic v2 |
| API contract | `openapi.yaml` in the project root |
| Styling | MUI `sx` prop for layout; CSS Modules for animations/complex styles |
| Fonts | Cormorant Garamond (headings), Jost (body) — loaded via Google Fonts |

---

## Project structure

```
frontend/src/
  components/      # One .jsx + .module.css per section
  api/             # All fetch calls live here — never inline in components
  theme.js         # MUI theme — single source of truth for colours/typography

backend/
  app.py           # FastAPI app + middleware
  routes/          # One file per resource (menu.py, orders.py, …)
  models/          # Pydantic models
  services/        # Business logic (email, etc.)

openapi.yaml       # API contract — update before implementing any endpoint change
specs/             # Feature specs — one .md file per feature
```

---

## Frontend rules

### MUI — always use it for UI primitives
- **Never** build buttons, inputs, dialogs, or layout from scratch if MUI has them.
- Import components individually to keep bundle size small:
  ```js
  // ✅
  import Button from '@mui/material/Button'
  // ❌
  import { Button } from '@mui/material'
  ```

### Theme — never hardcode values
All colours and spacing come from the MUI theme in `src/theme.js`.
```jsx
// ✅
<Box sx={{ color: 'primary.main', p: 3 }}>
// ❌
<Box sx={{ color: '#c8965a', padding: '24px' }}>
```

### Brand colour palette (for theme values only)
| Token | Hex | Use |
|-------|-----|-----|
| primary.main | `#c8965a` | Caramel — CTAs, accents |
| primary.dark | `#b8893a` | Gold — hover states |
| text.primary | `#2a2520` | Charcoal — body text |
| text.secondary | `#7a6e66` | Stone — subtitles |
| background.default | `#faf7f2` | Cream — page bg |
| background.paper | `#fffdf9` | Warm white — cards |

### Component anatomy (top to bottom)
1. External imports, then internal imports
2. Constants / static data outside the component function
3. Inside the component: state → effects → derived values → JSX

### API calls
All `fetch` calls live in `src/api/`. Components call these functions — they never construct URLs directly.

### Always handle three UI states
```jsx
if (loading) return <CircularProgress />
if (error)   return <Alert severity="error">{error}</Alert>
return <ActualContent />
```

---

## Backend rules

### Every endpoint needs a Pydantic model
No raw `dict` in or out. Every request body and every response has a typed model in `models/`.

### Route handlers are thin
Routes validate → call a service → return. Business logic lives in `services/`.

### Naming
- Variables / functions: `snake_case`
- Classes / models: `PascalCase`
- Constants: `UPPER_SNAKE_CASE`
- Route functions: verb + noun (`get_menu`, `create_order`)

### HTTP status codes
- `201` Created, `404` Not found, `422` Validation error (auto), `500` Server error

### Environment variables
Never hardcode. Use `os.getenv()` with `python-dotenv`. Add new vars to `.env.example`.

---

## Spec-driven rule

**No new endpoint or component may be implemented without a spec.**

1. For API changes: update `openapi.yaml` first, then implement.
2. For features: fill in `specs/FEATURE_SPEC_TEMPLATE.md`, get it reviewed, then implement.

---

## Style & tone (copy/content)
- Warm but sophisticated — elevated, not stuffy
- French terms used naturally: *pâtisserie*, *créations*, *commande*
- No exclamation marks in UI copy
- Bakery name "Lune" is subject to change — don't hardcode it in more places than necessary
