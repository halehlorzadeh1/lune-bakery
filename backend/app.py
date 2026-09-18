from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Lune Bakery API")

# Allow requests from the Vite dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://lune-bakery-frontend.onrender.com"],
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------------------------------------------------------------------------
# Models
# ---------------------------------------------------------------------------

class OrderRequest(BaseModel):
    firstName: str
    lastName: str
    email: EmailStr
    occasion: Optional[str] = ""
    message: str


# ---------------------------------------------------------------------------
# Menu data (replace with DB queries later)
# ---------------------------------------------------------------------------

MENU_ITEMS = [
    {
        "id": 1,
        "name": "Crème Brûlée",
        "description": "Vanilla bean custard · caramelised sugar",
        "price": "$9",
        "image": "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80&fit=crop",
    },
    {
        "id": 2,
        "name": "Paris-Brest",
        "description": "Choux pastry · praline mousseline cream",
        "price": "$11",
        "image": "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80&fit=crop",
    },
    {
        "id": 3,
        "name": "Croissant",
        "description": "72-hour laminated dough · French AOP butter",
        "price": "$6",
        "image": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&q=80&fit=crop",
    },
    {
        "id": 4,
        "name": "Frangipane",
        "description": "Almond cream · seasonal fruit tart",
        "price": "$10",
        "image": "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600&q=80&fit=crop",
    },
    {
        "id": 5,
        "name": "Macarons",
        "description": "French almond meringue · seasonal ganache",
        "price": "$4 each",
        "image": "https://images.unsplash.com/photo-1572441713132-51d335eda5b7?w=600&q=80&fit=crop",
    },
    {
        "id": 6,
        "name": "Mille-Feuille",
        "description": "Puff pastry · vanilla diplomat cream",
        "price": "$11",
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80&fit=crop",
    },
]


# ---------------------------------------------------------------------------
# Routes
# ---------------------------------------------------------------------------

@app.get("/api/menu")
def get_menu():
    """Return all menu items."""
    return MENU_ITEMS


@app.post("/api/orders", status_code=201)
def create_order(order: OrderRequest):
    """
    Accept a new order enquiry.
    TODO: persist to a database and/or send a confirmation email.
    """
    print(f"New order from {order.firstName} {order.lastName} <{order.email}>")
    print(f"  Occasion : {order.occasion or 'Not specified'}")
    print(f"  Message  : {order.message}")

    # Placeholder: add email sending here (e.g. via SendGrid or SMTP)
    # send_confirmation_email(order)

    return {"message": "Order received. We'll be in touch within 24 hours."}


@app.get("/api/health")
def health():
    return {"status": "ok"}
