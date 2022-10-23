import styles from '../styles/SignInForm.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setUser, setToken } from '../features/userSlice'
import axios from 'axios'
import {getUserLogin} from '../pages/api/login'


export default function SignInForm(userId) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
 
    const router = useRouter()
    const dispatch = useDispatch()

    const getUserProfile = (token) => {
        return axios.get( 
            'http://localhost:3002/api/v1/user/profile', {
                headers: { Authorization: `Bearer ${token}`}
            }
        )
        .then(response => {
            const id = response.data.body.id
            router.push('user/' + id)
            dispatch(setUser(response.data.body))
        })
    }
    const login = () => {
        return getUserLogin({
            email:username,
            password:password
        })    
        .then(response => {
            const token = response.data.body.token
            dispatch(setToken({token}))
            return token
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        login().then(getUserProfile)
            .catch(err => {
            setError(err.response.data.message)
        })
    }

    return(
        <>
        <section className={styles.signIn}>
            <h1>Sign In</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.wrapper}>
                    <label htmlFor="username">Username</label><input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className={styles.wrapper}>
                    <label htmlFor="password">Password</label><input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                {error && (
                    <>
                        <div className={styles.error}> {error} </div>
                    </>
                )}
                <button href={userId}className={styles.button}>Sign In</button>
            </form>
        </section>
        </>
        
    )
}