# Lune Bakery — Web Project

React + Vite frontend · FastAPI Python backend

## Project structure

```
Bakery Business/
├── frontend/          # React + Vite
│   ├── src/
│   │   ├── components/    # One .jsx + .module.css per section
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css      # CSS custom properties / global reset
│   ├── index.html
│   ├── vite.config.js     # Proxies /api → localhost:8000
│   └── package.json
├── backend/           # FastAPI
│   ├── app.py             # Routes: GET /api/menu · POST /api/orders
│   ├── requirements.txt
│   └── .env.example
└── .gitignore
```

## Prerequisites

- **Node.js** 18+ — https://nodejs.org
- **Python** 3.11+ — https://python.org

## Running locally

### 1 — Backend

```bash
cd "Bakery Business/backend"

# Create a virtual environment (first time only)
python3 -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate

# Install dependencies (first time only)
pip install -r requirements.txt

# Copy env file and fill in values (optional)
cp .env.example .env

# Start the server
uvicorn app:app --reload --port 8000
```

API will be available at http://localhost:8000
Interactive docs at http://localhost:8000/docs

### 2 — Frontend

Open a second terminal:

```bash
cd "Bakery Business/frontend"

# Install dependencies (first time only)
npm install

# Start the dev server
npm run dev
```

Site will be available at http://localhost:3000

Vite proxies all `/api/*` requests to `localhost:8000`, so the frontend
and backend talk to each other automatically in development.

## Key files to edit

| What | Where |
|------|-------|
| Page sections | `frontend/src/components/` |
| Global colours / fonts | `frontend/src/index.css` |
| Menu items | `backend/app.py` → `MENU_ITEMS` |
| Order handling / email | `backend/app.py` → `create_order()` |
| Bakery name, contact info | `frontend/src/components/Nav.jsx`, `Footer.jsx`, `Order.jsx` |

## Building for production

```bash
cd frontend && npm run build
# Outputs to frontend/dist/ — deploy to Vercel, Netlify, etc.
```

The backend can be deployed to Railway, Render, or any service that runs Python.
