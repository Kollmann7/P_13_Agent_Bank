import axios from 'axios'


export const getUserLogin = ({ email, password}) => {
  return axios
    .post('http://localhost:3002/api/v1/user/login',{
      email,
      password
    })
}

export const getUserProfile = ({token}) => {
  const config = {
    headers: { Authorization: `Bearer` + token },
  }
  return axios
  .get('http://localhost:3002/api/v1/user/profile', config)
  .then((response) => {
      const firstName = firstName
      const lastName = lastName
      console.log(response)
    })
}

export const updateUserProfile = ({ token, firstName, lastName }) => {
  const config = {
    headers: { Authorization: `Bearer` + token },
  }

  const userData = {
    firstName: firstName,
    lastName: lastName,
  }

  return axios
    .put('http://localhost:3002/api/v1/user/profile', userData, config)
    .then((response) => console.log(response))
}