import Logo from "./logo"
import SignIn from "./signIn"
import styles from '../styles/Header.module.css'

export default function Header() {
    return(
        <>
        <nav className={styles.header}>
            <Logo />
            <SignIn />
        </nav>
        </>
    )
}