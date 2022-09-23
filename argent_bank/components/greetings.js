import styles from '../styles/Greetings.module.css'

export default function Greetings () {
    return (
        <>
            <div className={styles.header}>
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className={styles.button}>Edit Name</button>
            </div>
        </>
    )
}