import Link from 'next/link'
import styles from '../styles/Header.module.css'
import { useSelector, useDispatch } from "react-redux"
import { removeToken , selecedtUser} from '../features/userSlice'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'


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
                <div className={styles.wrapper}>
                    <FontAwesomeIcon icon={solid("circle-user")} />
                    {user.firstName}
                </div>
            </button>
            <Link href={'/'}>
                <button className={styles.button} onClick={handleLogout}>
                    <div className={styles.wrapper}>
                        <FontAwesomeIcon icon={solid("right-from-bracket")} />
                        Sign Out
                    </div>
                </button>
            </Link>
        </div>
        </>
    )
}