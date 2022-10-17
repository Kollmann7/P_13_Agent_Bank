import Head from 'next/head'
import Header from '../components/signInHeader'
import Hero from '../components/hero'
import Features from '../components/features'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import SignOutHeader from '../components/signOutHeader'
import api from './api/api'

export default function Home({data}) {
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
  api.defaults.headers.Authorization = `Bearer ${token}`
  let {data} =  {}
  
  if(!!token){
    ({data} =  await api.get('/user/profile'))
  }
  return {
    props:{ data : !!token ? data : null }
  }
}