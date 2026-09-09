---
mode: agent
description: Scaffold a new React + MUI component for the Lune Bakery frontend
---

# New Component

Create a new React component for the Lune Bakery frontend.

## What to ask me first (if not already provided)

- What is the component called? (PascalCase, e.g. `PastryCard`)
- What section of the page is it for? (e.g. Menu, About, Order)
- What data does it display or handle?
- Does it fetch data from the API? If yes, which endpoint (check `openapi.yaml`)?
- Does it have user interactions (form, toggle, dialog)?

## Files to create

```
frontend/src/components/{ComponentName}/
  index.jsx
  {ComponentName}.module.css    ← only if complex styles are needed
```

## Rules to follow (from copilot-instructions.md)

### Structure — always in this order inside the file
1. External imports (React hooks, then MUI components individually)
2. Internal imports (`../../api/…`, sibling components)
3. Constants and static data **outside** the component function
4. The component function:
   - State declarations
   - `useEffect` hooks
   - Derived values and event handlers
   - Return JSX

### MUI
- Import each component individually: `import Button from '@mui/material/Button'`
- Use `sx` for layout and spacing; use `.module.css` for animations or multi-rule styles
- All colour and spacing values must come from the theme — no hardcoded hex or px values
- Use the correct MUI components for the job:
  - Text → `Typography`
  - Layout → `Box`, `Stack`, `Grid`
  - User input → `TextField`, `Select`, `Checkbox`
  - Feedback → `CircularProgress`, `Alert`, `Snackbar`
  - Overlay → `Dialog`, `Drawer`

### API calls
- If the component fetches data, create or reuse a function in `frontend/src/api/`
- The component itself never constructs a URL or calls `fetch` directly

### Three states — always handle all of them
```jsx
if (loading) return <CircularProgress />
if (error)   return <Alert severity="error">{error}</Alert>
return <YourContent />
```

### Props
- Destructure at the top of the function
- Provide default values for optional props
- Keep prop names in camelCase

## Example output shape

```jsx
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import { fetchSomething } from '../../api/something'

const DEFAULT_VALUE = 'default'

export default function ComponentName({ propA, propB = DEFAULT_VALUE }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetchSomething()
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <CircularProgress />
  if (error)   return <Alert severity="error">{error}</Alert>

  return (
    <Box>
      <Typography variant="h2">{propA}</Typography>
    </Box>
  )
}
```

## After creating the component

- If it needs a new API endpoint, remind me to update `openapi.yaml` first
- If it introduces new theme tokens, add them to `src/theme.js`
- Import and add it to `App.jsx` if it's a new page section
