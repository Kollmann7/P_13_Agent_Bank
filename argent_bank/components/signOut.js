import Link from 'next/link'
import styles from '../styles/Header.module.css'
import { useSelector, useDispatch } from "react-redux"
import { removeToken , selecedtUser} from '../features/userSlice'
import { useRouter } from 'next/router'


export default function SignOut () {
    const user = useSelector(selecedtUser)
    const dispatch = useDispatch()
    const router = useRouter()
    
    const profilePage = () => {
        const id = user.id
        router.push( router.pathname === '/user/' ? router.pathname + id : '/user/' + id)
    }

    const handleLogout = () => {
        dispatch(removeToken())
    }
    return(
        <>
        <div className={styles.user}>
            <button className={styles.button} onClick={profilePage}>
                <div>
                    {user.firstName}
                </div>
            </button>
            <Link href={'/'}>
                <button className={styles.button} onClick={handleLogout}>
                    Sign Out
                </button>
            </Link>
        </div>
        </>
    )
}