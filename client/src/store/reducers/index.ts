import {applyMiddleware, combineReducers, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import postsReducer from './postsReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))