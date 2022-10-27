import Head from 'next/head'
import Footer from '../../components/footer'
import SignOutHeader from '../../components/signOutHeader'
import styles from '../../styles/User.module.css'
import Greetings from '../../components/greetings'
import Account from '../../components/account'
import { useDispatch, useSelector } from 'react-redux'
import { selecedtUser } from '../../features/userSlice'
import { setUser } from '../../features/userSlice'
import api from '../api/api'


export default function User({ data }) {
  const dispatch = useDispatch()
  const user = useSelector(selecedtUser)
  console.log('user',user)
  if (!user.token && data) {
    dispatch(setUser(data.body))
  }
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
export async function getServerSideProps({ req, res }) {
  const token = req.cookies.token
  if (!token) {
    return {
      redirect: {
        destination: '/',
      }
    }
  }
  api.defaults.headers.Authorization = `Bearer ${token}`
  try {
    const { data } = await api.get('/user/profile')
    return {
      props: { data },
    }
  } catch (e) {
    return {
      redirect: {
        destination: '/',
      }
    }
  }
}
