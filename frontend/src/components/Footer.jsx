import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#hero" className={styles.logo}>Lune<span>.</span></a>
      <ul className={styles.links}>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#order">Order</a></li>
      </ul>
      <span className={styles.copy}>© 2026 Lune Bakery. All rights reserved.</span>
    </footer>
  )
}
