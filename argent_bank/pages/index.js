import Head from 'next/head'
import Header from '../components/signInHeader'
import Hero from '../components/hero'
import Features from '../components/features'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Argent Bank</title>
      </Head>
      <Header/>
      <main>
        <Hero />
        <Features/>
        <Footer/>
      </main>
    </>
  )
}
