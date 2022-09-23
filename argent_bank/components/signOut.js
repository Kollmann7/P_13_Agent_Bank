import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function SignOut () {
    return(
        <>
        <div className={styles.user}>
            <Link className={styles.item} href="/user">
            Tony
            </Link>
            <Link className={styles.item} href="/">
            Sign Out
            </Link>
        </div>
        </>
    )
}