import styles from './SignatureCTA.module.css'

export default function SignatureCTA() {
  return (
    <section className={styles.section}>
      <span className={styles.label}>Something Special</span>
      <h2 className={styles.title}>Custom orders &amp; <em>private events</em>.</h2>
      <p className={styles.body}>
        Planning a celebration? We create bespoke pastry collections for weddings,
        intimate dinners, and corporate events. Tell us your vision.
      </p>
      <a href="#order" className={styles.btn}>Get in Touch</a>
    </section>
  )
}
