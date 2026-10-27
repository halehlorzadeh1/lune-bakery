import styles from './MarqueeStrip.module.css'

const items = [
  'Restaurant Supply', 'Hotel Amenities', 'Corporate Catering', 'Event Partnerships',
  'Daily Delivery', 'Custom Volumes', 'Wholesale Pricing', 'Dedicated Account Manager',
  'Café Wholesale',
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
