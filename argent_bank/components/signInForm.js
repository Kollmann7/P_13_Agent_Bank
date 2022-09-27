import styles from '../styles/SignInForm.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { displayUser, updateToken } from '../features/userSlice'
import axios from 'axios'
import {getUserLogin} from '../pages/api/login'


export default function SignInForm(userId) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
 
    const router = useRouter()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        getUserLogin({
            email:username,
            password:password
        })    
        .then(response => {
            const token = response.data.body.token
            dispatch(updateToken({token}))
            axios.get( 
                'http://localhost:3002/api/v1/user/profile', {
                    headers: { Authorization: `Bearer ${token}`}
                }
            )
            .then(response => {
                console.log(response)
                const id = response.data.body.id
                router.push('user/' + id)
                dispatch(displayUser(response.data.body))
            })
        })
    }

    return(
        <>
        <section className={styles.signIn}>
            <h1>Sign In</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.wrapper}>
                    <label for="username">Username</label><input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className={styles.wrapper}>
                    <label for="password">Password</label><input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className={styles.remember}>
                    <input type="checkbox" id="remember-me" /><label for="remember-me"
                    >Remember me</label>
                </div>
                <button href={userId}className={styles.button}>Sign In</button>
            </form>
        </section>
        </>
    )
}