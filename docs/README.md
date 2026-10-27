# Lune Bakery — Project Documentation

> **Note:** The bakery name "Lune" is subject to change. Update all references when finalized.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Live URLs](#live-urls)
4. [Repository](#repository)
5. [Frontend](#frontend)
6. [Backend](#backend)
7. [Local Development](#local-development)
8. [Deployment](#deployment)
9. [Known TODOs](#known-todos)

---

## Project Overview

Lune Bakery is a French patisserie website with an elegant, Parisian aesthetic. It showcases the menu and allows customers to submit custom order enquiries. The site is split into a React frontend and a FastAPI backend, both hosted on Render.

---

## Architecture

```
Bakery-Business/
├── frontend/        # React + Vite (UI)
├── backend/         # FastAPI + Python (API)
└── docs/            # Project documentation (this folder)
```

---

## Live URLs

| Service        | URL                                               |
|---------------|---------------------------------------------------|
| Frontend       | https://lune-bakery-frontend.onrender.com         |
| Backend API    | https://lune-bakery-backend.onrender.com          |
| API Docs       | https://lune-bakery-backend.onrender.com/docs     |
| GitHub Repo    | https://github.com/halehlorzadeh1/lune-bakery     |

> **Note:** Render's free tier spins down the backend after 15 minutes of inactivity. The first request after idle may take ~30 seconds to wake up. Upgrade to a paid plan ($7/month) to keep it always on.

---

## Frontend

**Stack:** React 18, React Router v6, Vite 5, CSS Modules

**Pages / Components:**

| Component       | Description                                      |
|----------------|--------------------------------------------------|
| `Nav`           | Top navigation bar                               |
| `Hero`          | Full-bleed landing section                       |
| `MarqueeStrip`  | Scrolling marquee with brand tagline             |
| `Menu`          | Pastry menu grid (fetches from `/api/menu`)      |
| `About`         | About the bakery section                         |
| `SignatureCTA`  | Call-to-action section                           |
| `Order`         | Custom order enquiry form (posts to `/api/orders`) |
| `Footer`        | Site footer                                      |

**Key files:**
- `src/App.jsx` — root component and routing
- `src/main.jsx` — app entry point
- `vite.config.js` — Vite configuration

---

## Backend

**Stack:** FastAPI, Pydantic v2, Uvicorn, Python 3.11

**API Endpoints:**

| Method | Endpoint       | Description                        |
|--------|---------------|------------------------------------|
| GET    | `/api/menu`   | Returns all menu items             |
| POST   | `/api/orders` | Submits a custom order enquiry     |
| GET    | `/api/health` | Health check                       |
| GET    | `/docs`       | Auto-generated Swagger UI          |

**Key files:**
- `app.py` — all routes, models, and menu data
- `requirements.txt` — Python dependencies
- `.python-version` — pins Python to 3.11 for Render compatibility

**CORS:** Configured to allow requests from:
- `http://localhost:3000` (local dev)
- `https://lune-bakery-frontend.onrender.com` (production)

---

## Local Development

### Frontend

```bash
cd frontend
npm install
npm run dev
```
Runs at `http://localhost:3000`

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate       # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app:app --reload --port 8000
```
Runs at `http://localhost:8000`  
API docs at `http://localhost:8000/docs`

---

## Deployment

Both services are hosted on **Render** (free tier).

### Backend (Web Service)
- **Root Directory:** `backend`
- **Build Command:** `pip install -r requirements.txt`
- **Start Command:** `uvicorn app:app --host 0.0.0.0 --port 10000`
- **Python Version:** 3.11 (set via `backend/.python-version`)

### Frontend (Static Site)
- **Root Directory:** `frontend`
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`

### Deploying updates
Push to the `main` branch on GitHub — Render auto-deploys both services on every push.

```bash
git add .
git commit -m "your message"
git push
```

---

## Known TODOs

- [ ] Finalize bakery name (currently "Lune") and update all branding
- [ ] Add email confirmation on order submission (e.g. SendGrid or SMTP)
- [ ] Replace hardcoded menu data in `app.py` with a database
- [ ] Add a custom domain once name is finalized
- [ ] Consider upgrading Render backend to a paid plan to eliminate cold-start delays
