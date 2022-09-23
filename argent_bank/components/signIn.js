import Link from 'next/link'
import styles from '../styles/Header.module.css'


export default function signIn () {
    return(
        <div>
            <Link className={styles.item} href="/sign-in">
            Sign In
            </Link>
        </div>
    )
}
