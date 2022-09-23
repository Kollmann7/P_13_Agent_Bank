import styles from '../styles/Header.module.css'
import style from '../styles/sr-only.module.css'
import Link from 'next/link'
import Image from "next/image"
import logo from '../img/argentBankLogo.png'

export default function Logo () {
    return(
    <>
        <Link className={styles.logo} href="/">
            <Image
            className={styles.image}
            src={logo}
            alt="Argent Bank Logo"
            />
        </Link>
        <h1 className={style.sr}>Argent Bank</h1>
    </>
    )
}
