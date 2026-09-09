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
        <span className={styles.label}>Notre Histoire</span>
        <h2 className={styles.title}>Born from a love<br />of <em>Paris</em>.</h2>
        <div className={styles.divider} />
        <p className={styles.body}>
          Lune began as an obsession — early mornings in a small kitchen, trying to recreate
          the exact crunch of a croissant eaten on a Paris street. That pursuit of perfection
          became a bakery.
        </p>
        <blockquote className={styles.quote}>
          "Every layer of pastry holds a small secret. We take the time to find it."
        </blockquote>
        <p className={styles.body}>
          We source our butter from Normandy, our vanilla from Madagascar, and our inspiration
          from the storied pâtisseries of the 6th arrondissement. Everything is made by hand,
          in small batches, each morning.
        </p>
        <div className={styles.stats}>
          <div>
            <div className={styles.statNum}>04:00</div>
            <div className={styles.statLabel}>We start baking</div>
          </div>
          <div>
            <div className={styles.statNum}>72h</div>
            <div className={styles.statLabel}>Croissant dough</div>
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
