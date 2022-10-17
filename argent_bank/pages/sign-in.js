import Head from 'next/head'
import Header from '../components/signInHeader'
import Footer from '../components/footer'
import SignInForm from '../components/signInForm'
import styles from '../styles/SignInPage.module.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import api from './api/api'


export default function SignIn ({data}) {
    const router = useRouter()
    useEffect (() =>{
        if(data !== null ){
            const id = data.body.id
            router.push('user/' + id)
        }
    })
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

export async function getServerSideProps({req, res}) {
    const token = req.cookies.token
    api.defaults.headers.Authorization = `Bearer ${token}`
    let {data} =  {}
    if(!!token){
      ({data} =  await api.get('/user/profile'))
    }

    return {
      props:{ data : !!token ? data : null }
    }
}
