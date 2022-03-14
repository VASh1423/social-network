import axios from "axios";
import { setUser } from "../reducers/userReducer";

export const registration = async (e: any, username: string, email: string, password: string, repeatPassword: string) => {
  e.preventDefault()

  try {
    const response = await axios.post('/api/auth/registration', {
      username, 
      email, 
      password
    })
  } catch (error: any) {
    console.log(error.response.data.message);
  }
}

export const login = (e: any, email: string, password: string) => {
  e.preventDefault()
  return async (dispatch: any) => {
    try {
      const response = await axios.post('/api/auth/login', {
        email, 
        password
      })
      dispatch(setUser(response.data.user))
      localStorage.setItem('token', response.data.token)
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  }
}

export const auth = () => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get('/api/auth/auth', {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
      dispatch(setUser(response.data.user))
      localStorage.setItem('token', response.data.token)
    } catch (error: any) {
      console.log(error.response.data.message);
      localStorage.removeItem('token')
    }
  }
}