import Head from 'next/head'
import Header from '../components/signInHeader'
import Footer from '../components/footer'
import SignInForm from '../components/signInForm'
import styles from '../styles/SignInPage.module.css'

export default function SignIn () {
    return(
        <>
        <Head>
            <title>Argent Bank</title>
        </Head>
        <Header />
        <main className={styles.dark}>
            <SignInForm />
        </main>
        <Footer />
        </>
    )
}