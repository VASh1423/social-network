const SET_USER = 'SET_USER'
const LOGOUT = 'LOGOUT'
const GET_USER_DATA = 'GET_USER_DATA'

const defaultState = {
  currentUser: null,
  isAuth: false
}

export default function userReducer(state = defaultState, action: any){
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true
      }
    case LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
        currentUser: null,
        isAuth: false
      }
    case GET_USER_DATA:
      return {
        ...state,
        currentUser: action.payload,
      }
    default:
      return state
  }
}

export const setUser = (user: any) => ({type: SET_USER, payload: user})
export const logout = () => ({type: LOGOUT})
export const setUserData = (user: any) => ({type: GET_USER_DATA, payload: user})