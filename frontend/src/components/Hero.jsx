import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.left}>
        <p className={styles.eyebrow}>Wholesale Pâtisserie · B2B Supply</p>
        <h1 className={styles.title}>
          French pastry,<br />delivered to <em>your</em><br />business.
        </h1>
        <p className={styles.subtitle}>
          We supply restaurants, hotels, corporate offices, and event planners
          with handcrafted French pastries — made fresh daily, delivered reliably.
        </p>
        <div className={styles.actions}>
          <a href="#order" className={styles.btnPrimary}>Become a Partner</a>
          <a href="#menu" className={styles.btnSecondary}>View Wholesale Menu</a>
        </div>
      </div>
      <div className={styles.right}>
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&q=85&fit=crop"
          alt="Artisan pastries on marble"
        />
      </div>
    </section>
  )
}
