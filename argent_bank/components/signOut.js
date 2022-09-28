import Link from 'next/link'
import styles from '../styles/Header.module.css'
import { useSelector, useDispatch } from "react-redux"
import { logout , selecedtUser} from '../features/userSlice'

export default function SignOut () {
    const user = useSelector(selecedtUser)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }
    return(
        <>
        <div className={styles.user}>
            <Link className={styles.item} href="/user">
                <div>
                    {user.firstName}
                </div>
            </Link>
            <Link className={styles.item} href="/" >
                <button className={styles.button} onClick={handleLogout}>
                    Sign Out
                </button>
            </Link>
        </div>
        </>
    )
}