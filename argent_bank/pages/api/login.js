// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

export const getUserLogin = ({ email, password}) => {
  return axios
    .post('http://localhost:3002/api/v1/user/login',{
      email,
      password
    })
    .catch((error) => console.log(error))
}

export const getUserProfile = ({token}) => {
  const config = {
    headers: { Authorization: `Bearer` + token },
  }
  return axios
    .post('http://localhost:3002/api/v1/user/profile', config)
    .catch((error) => console.log(error))
}