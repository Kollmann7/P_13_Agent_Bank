import styles from '../styles/SignInForm.module.css'
import Link from 'next/link'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { login } from '../features/userSlice'

export default function SignInForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    console.log(username)

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(login({
            username:username,
            password:password,
            loggedIn:true
        }))
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
                <Link href="/user" className={styles.button}>Sign In</Link>
                <button className={styles.button}>Sign In</button>
            </form>
        </section>
        </>
    )
}