import axios from "axios";

export const registration = async (e: any, username: string, email: string, password: string, repeatPassword: string) => {
  e.preventDefault()

  try {
    const response = await axios.post('/api/auth/registration', {
      username, 
      email, 
      password
    })
    alert(response.data.message)
  } catch (error: any) {
    alert(error.response.data.message);
  }
}