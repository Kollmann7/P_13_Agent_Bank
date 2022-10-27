import Head from 'next/head'
import Header from '../components/signInHeader'
import Hero from '../components/hero'
import Features from '../components/features'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import SignOutHeader from '../components/signOutHeader'
import api from './api/api'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, selecedtUser } from '../features/userSlice'

export default function Home({data}) {
  const dispatch = useDispatch()
  const user = useSelector(selecedtUser)
  if (!user.token && data){
    dispatch(setUser(data.body))
  }
  return (
    <>
      <Head>
        <title>Argent Bank</title>
      </Head>
      {data && 
      <>
        <SignOutHeader />
      </>
      }
      {!data &&
      <>
        <Header/>
      </>
      }
      <main>
        <Hero />
        <Features/>
        <Footer/>
      </main>
    </>
  )
}
export async function getServerSideProps({req, res}) {
  const token = req.cookies.token
  if (!token) {
    return {props:{}}
  }
  
  api.defaults.headers.Authorization = `Bearer ${token}`
  
  try{
    const { data } = await api.get('/user/profile')
    return {
      props: { data },
    }
  }catch (e){
    return { props: {} }
  }

}