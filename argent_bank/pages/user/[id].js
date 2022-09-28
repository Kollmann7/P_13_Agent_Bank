import Head from 'next/head'
import Footer from '../../components/footer'
import SignOutHeader from '../../components/signOutHeader'
import styles from '../../styles/User.module.css'
import Greetings from '../../components/greetings'
import Account from '../../components/account'


export default function User (){
    return(
        <>
        <Head>
            <title>Argent Bank</title>
            
        </Head>
        <SignOutHeader />
        <main className={styles.dark}>
            <Greetings />
            <Account />
        </main>
        <Footer />
        </>
    )
}