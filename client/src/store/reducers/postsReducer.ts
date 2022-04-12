const GET_OWN_POSTS = 'GET_OWN_POSTS'

const defaultState = {
  ownPosts: []
}

export default function postsReducer(state = defaultState, action: any){
  switch (action.type){
    case GET_OWN_POSTS:
      return {
        ...state,
        ownPosts: action.payload
      }
    default:
      return state
  }
}

export const setOwenPosts = (id: string) => ({type: GET_OWN_POSTS, payload: id})