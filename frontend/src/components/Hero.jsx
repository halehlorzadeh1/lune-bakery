import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.left}>
        <p className={styles.eyebrow}>Pâtisserie Française · Artisan Pastries</p>
        <h1 className={styles.title}>
          The art of<br />the <em>perfect</em><br />pastry.
        </h1>
        <p className={styles.subtitle}>
          Each creation is a small ceremony — layers of butter, patience, and tradition,
          made by hand in the spirit of Paris.
        </p>
        <div className={styles.actions}>
          <a href="#menu" className={styles.btnPrimary}>Explore the Menu</a>
          <a href="#about" className={styles.btnSecondary}>Our Story</a>
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
