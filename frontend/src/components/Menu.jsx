import { useState, useEffect } from 'react'
import styles from './Menu.module.css'

const FALLBACK_ITEMS = [
  {
    id: 1,
    name: 'Crème Brûlée',
    description: 'Vanilla bean custard · caramelised sugar',
    price: '$9',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80&fit=crop',
  },
  {
    id: 2,
    name: 'Paris-Brest',
    description: 'Choux pastry · praline mousseline cream',
    price: '$11',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80&fit=crop',
  },
  {
    id: 3,
    name: 'Croissant',
    description: '72-hour laminated dough · French AOP butter',
    price: '$6',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&q=80&fit=crop',
  },
  {
    id: 4,
    name: 'Frangipane',
    description: 'Almond cream · seasonal fruit tart',
    price: '$10',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600&q=80&fit=crop',
  },
  {
    id: 5,
    name: 'Macarons',
    description: 'French almond meringue · seasonal ganache',
    price: '$4 each',
    image: 'https://images.unsplash.com/photo-1572441713132-51d335eda5b7?w=600&q=80&fit=crop',
  },
  {
    id: 6,
    name: 'Mille-Feuille',
    description: 'Puff pastry · vanilla diplomat cream',
    price: '$11',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80&fit=crop',
  },
]

export default function Menu() {
  const [items, setItems] = useState(FALLBACK_ITEMS)

  useEffect(() => {
    fetch('/api/menu')
      .then(r => r.json())
      .then(data => { if (data?.length) setItems(data) })
      .catch(() => {}) // silently fall back to static data
  }, [])

  return (
    <section id="menu" className={styles.section}>
      <div className={styles.header}>
        <div>
          <span className={styles.label}>La Carte</span>
          <h2 className={styles.title}>Our <em>Signature</em><br />Créations</h2>
        </div>
        <p className={styles.subtitle}>
          Crafted daily with imported French butter and seasonal ingredients.
          Each pastry is a small work of art.
        </p>
      </div>
      <div className={styles.grid}>
        {items.map(item => (
          <div key={item.id} className={styles.card}>
            <img className={styles.cardImg} src={item.image} alt={item.name} />
            <div className={styles.overlay}>
              <div className={styles.cardName}>{item.name}</div>
              <div className={styles.cardDesc}>{item.description}</div>
              <div className={styles.cardPrice}>{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
