import Logo from "./logo"
import styles from '../styles/Header.module.css'
import SignOut from "./signOut"

export default function SignOutHeader () {
    return(
        <>
        <nav className={styles.header}>
            <Logo />
            <SignOut />
        </nav>
        </>
    )
}