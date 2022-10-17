import Head from 'next/head'
import Footer from '../../components/footer'
import SignOutHeader from '../../components/signOutHeader'
import styles from '../../styles/User.module.css'
import Greetings from '../../components/greetings'
import Account from '../../components/account'
import { useDispatch, useSelector } from 'react-redux'
import { selecedtUser } from '../../features/userSlice'
import { setUser } from '../../features/userSlice'
import { setToken } from '../../features/userSlice'
import { useEffect } from 'react'
import api from '../api/api'


export default function User ({data}){
    const dispatch = useDispatch()
    dispatch(setUser(data.body))
    return (
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
export async function getServerSideProps({req, res}) {
    const token = req.cookies.token
    api.defaults.headers.Authorization = `Bearer ${token}`
    let {data} =  {}
    if(!!token){
      ({data} =  await api.get('/user/profile'))
    }

    if(token === undefined){
        return {
            redirect:{
            destination: '/',
            }
        }
    }

    return {
      props:{ data : !!token ? data : null }
    }
}
