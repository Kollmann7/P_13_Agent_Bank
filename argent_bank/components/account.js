import styles from '../styles/Account.module.css'

export default function Account () {
    return (
        <>
        <section className={styles.account}>
            <div className={styles.wrapper}>
                <h3 className={styles.title}>Argent Bank Checking (x8349)</h3>
                <p className={styles.amount}>$2,082.79</p>
                <p className={styles.description}>Available Balance</p>
            </div>
            <div className={styles.cta}>
                <button className={styles.button}>View transactions</button>
            </div>
        </section>
        <section className={styles.account}>
            <div className={styles.wrapper}>
                <h3 className={styles.title}>Argent Bank Savings (x6712)</h3>
                <p className={styles.amount}>$10,928.42</p>
                <p className={styles.description}>Available Balance</p>
            </div>
            <div className={styles.cta}>
                <button className={styles.button}>View transactions</button>
            </div>
        </section>
        <section className={styles.account}>
            <div className={styles.wrapper}>
                <h3 className={styles.title}>Argent Bank Credit Card (x8349)</h3>
                <p className={styles.amount}>$184.30</p>
                <p className={styles.description}>Current Balance</p>
            </div>
            <div className={styles.cta}>
                <button className={styles.button}>View transactions</button>
            </div>
        </section>
        </>
    )
}