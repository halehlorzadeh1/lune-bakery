import styles from './SignatureCTA.module.css'

export default function SignatureCTA() {
  return (
    <section className={styles.section}>
      <span className={styles.label}>Wholesale &amp; Partnerships</span>
      <h2 className={styles.title}>Tailored supply for <em>your business</em>.</h2>
      <p className={styles.body}>
        Whether you need a daily croissant programme for a hotel breakfast, a signature
        dessert for your restaurant, or a curated selection for a corporate event —
        we build the right partnership around you.
      </p>
      <a href="#order" className={styles.btn}>Start a Conversation</a>
    </section>
  )
}
