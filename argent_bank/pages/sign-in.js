import Head from 'next/head'
import Header from '../components/signInHeader'
import Footer from '../components/footer'
import SignInForm from '../components/signInForm'
import styles from '../styles/SignInPage.module.css'
import api from './api/api'


export default function SignIn({ data }) {
  return (
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

export async function getServerSideProps({ req, res }) {
  const token = req.cookies.token
  if (!token) {
    return { props: {} }
  }
  
  api.defaults.headers.Authorization = `Bearer ${token}`
  
  try{
    const { data } = await api.get('/user/profile')
    return {
      props: { data },
      redirect: {
        destination: '/user/' + data.body.id,
      }
    }
  }catch (e){
    return { props: {} }
  }
}
