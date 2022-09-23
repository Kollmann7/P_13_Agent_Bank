import styles from '../styles/Hero.module.css'
import style from '../styles/sr-only.module.css'

export default function Hero () {
    return (
      <div className={styles.image}>
        <section className={styles.hero}>
          <h2 className={style.sr}>Promoted Content</h2>
          <p className={styles.subtitle}>No fees.</p>
          <p className={styles.subtitle}>No minimum deposit.</p>
          <p className={styles.subtitle}>High interest rates.</p>
          <p className={styles.text}>Open a savings account with Argent Bank today!</p>
        </section>
      </div>
    )
}