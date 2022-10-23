import Link from 'next/link'
import styles from '../styles/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'


export default function signIn () {
    return(
        <div className={styles.wrapper}>
            <FontAwesomeIcon icon={solid("circle-user")} />
            <Link className={styles.item} href="/sign-in">
            Sign In
            </Link>
        </div>
    )
}
