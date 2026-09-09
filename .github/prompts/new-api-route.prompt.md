---
mode: agent
description: Scaffold a new FastAPI route for the Lune Bakery backend, following spec-first rules
---

# New API Route

Create a new FastAPI endpoint for the Lune Bakery backend.

## What to ask me first (if not already provided)

- What is the HTTP method and path? (e.g. `GET /api/menu/{id}`)
- What does the endpoint do in one sentence?
- What does the request body look like (for POST/PATCH)?
- What does a successful response look like?
- Is authentication required?
- Has `openapi.yaml` already been updated for this endpoint?

## Spec-first check

**Before writing any implementation**, confirm the endpoint exists in `openapi.yaml`.
If it does not, stop and update `openapi.yaml` first. The spec is the contract.

Check `openapi.yaml` now:
- Does the path exist under `paths:`?
- Do the request/response schemas exist under `components/schemas:`?

If either is missing, add them before proceeding.

## Files to create or modify

```
backend/
  routes/{resource}.py        ← create if new resource, otherwise add to existing
  models/{resource}.py        ← Pydantic request/response models
  services/{resource}.py      ← business logic (if non-trivial)
  app.py                      ← include the new router if it's a new file
openapi.yaml                  ← must already be updated before this prompt runs
```

## Rules to follow (from copilot-instructions.md)

### Pydantic models — required for all I/O
Never use raw `dict`. Every request body and every response has a typed Pydantic model.

```python
# ✅
from pydantic import BaseModel, EmailStr

class OrderRequest(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    message: str

# ❌
@app.post("/api/orders")
def create_order(data: dict):
    ...
```

### Route handlers are thin
The handler validates, calls a service, returns. Logic lives in `services/`.

```python
# ✅
from services.orders import process_order

@router.post("/orders", status_code=201)
def create_order(order: OrderRequest) -> OrderConfirmation:
    return process_order(order)
```

### HTTP status codes
| Situation | Code |
|-----------|------|
| Created | `201` |
| Not found | `404` via `HTTPException` |
| Validation error | `422` (FastAPI/Pydantic handles automatically) |
| Server error | `500` |

### Naming
- Functions: `snake_case` verb + noun (`get_menu_item`, `create_order`)
- Models: `PascalCase` (`OrderRequest`, `OrderConfirmation`)
- Constants: `UPPER_SNAKE_CASE`

### Router setup
Use `APIRouter` — never put routes directly on the `app` object in a routes file.

```python
from fastapi import APIRouter
router = APIRouter(prefix="/api", tags=["orders"])
```

Then in `app.py`:
```python
from routes.orders import router as orders_router
app.include_router(orders_router)
```

## After creating the route

- Verify `openapi.yaml` matches what was implemented (schema names, field names, status codes)
- Test manually via FastAPI's auto-generated docs at `http://localhost:8000/docs`
- Update the frontend `src/api/` file if the frontend needs to call this endpoint
