import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.images}>
        <img
          className={styles.imgMain}
          src="https://images.unsplash.com/photo-1534432182912-63863115e106?w=700&q=80&fit=crop"
          alt="Pastry chef at work"
        />
        <img
          className={styles.imgAccent}
          src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&q=80&fit=crop"
          alt="Fresh croissants"
        />
      </div>
      <div className={styles.content}>
        <span className={styles.label}>Why Partner With Us</span>
        <h2 className={styles.title}>Your clients deserve<br /><em>exceptional</em> pastry.</h2>
        <div className={styles.divider} />
        <p className={styles.body}>
          Lune was built for businesses that refuse to compromise on quality. We supply
          restaurants, hotels, corporate offices, and event planners with handcrafted
          French pastries — made fresh each morning and delivered to your door.
        </p>
        <blockquote className={styles.quote}>
          "Your brand is only as good as the experience you put in front of your guests."
        </blockquote>
        <p className={styles.body}>
          We work with each partner to define the right assortment, volume, and delivery
          schedule. Flexible minimum orders, dedicated account support, and consistent
          quality — every single day.
        </p>
        <div className={styles.stats}>
          <div>
            <div className={styles.statNum}>04:00</div>
            <div className={styles.statLabel}>Fresh baked daily</div>
          </div>
          <div>
            <div className={styles.statNum}>48h</div>
            <div className={styles.statLabel}>Onboarding time</div>
          </div>
          <div>
            <div className={styles.statNum}>100%</div>
            <div className={styles.statLabel}>Made by hand</div>
          </div>
        </div>
      </div>
    </section>
  )
}
