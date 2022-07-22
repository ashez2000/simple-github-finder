import {
  FETCH_SEARCH_USERS,
  SET_SEARCH_USERS,
  CLEAR_SEARCH_USERS,
  FETCH_USER_REPOS,
  SET_USER_REPOS,
} from './githubTypes'

const githubReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SEARCH_USERS:
      return {
        ...state,
        loading: true,
      }

    case SET_SEARCH_USERS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      }

    case CLEAR_SEARCH_USERS:
      return {
        ...state,
        users: [],
      }

    case FETCH_USER_REPOS:
      return {
        ...state,
        loading: true,
      }

    case SET_USER_REPOS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        repos: action.payload.repos,
      }

    default:
      return state
  }
}

export default githubReducer
