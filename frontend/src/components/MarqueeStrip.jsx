import styles from './MarqueeStrip.module.css'

const items = [
  'Crème Brûlée', 'Paris-Brest', 'Frangipane', 'Mille-Feuille',
  'Croissant au Beurre', 'Tarte Citron', 'Éclair au Chocolat',
  'Macaron', 'Kouign-Amann',
]

export default function MarqueeStrip() {
  const doubled = [...items, ...items]

  return (
    <div className={styles.strip}>
      <div className={styles.inner}>
        {doubled.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}
