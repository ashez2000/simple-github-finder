import { createContext, useContext, useReducer } from 'react'

import githubApi from '../../utils/api'
import githubReducer from './githubReducer'
import {
  FETCH_SEARCH_USERS,
  SET_SEARCH_USERS,
  CLEAR_SEARCH_USERS,
  FETCH_USER_REPOS,
  SET_USER_REPOS,
} from './githubTypes'

const initialState = {
  users: [],
  repos: [],
  user: {},
  loading: false,
  searchUsers: () => {},
  clearUsers: () => {},
  fetchUserAndRepos: () => {},
}

const GithubContext = createContext(initialState)

export const useGithub = () => useContext(GithubContext)

export const GithubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(githubReducer, initialState)

  const searchUsers = async (text) => {
    dispatch({ type: FETCH_SEARCH_USERS })
    const data = await githubApi(`/search/users?q=${text}`)
    dispatch({ type: SET_SEARCH_USERS, payload: data.items })
  }

  const fetchUserAndRepos = async (login) => {
    dispatch({ type: FETCH_USER_REPOS })

    const [user, repos] = await Promise.all([
      githubApi(`/users/${login}`),
      githubApi(`/users/${login}/repos`),
    ])

    dispatch({ type: SET_USER_REPOS, payload: { user, repos } })
  }

  const clearUsers = () => dispatch({ type: CLEAR_SEARCH_USERS })

  const value = {
    users: state.users,
    user: state.user,
    repos: state.repos,
    loading: state.loading,
    searchUsers,
    fetchUserAndRepos,
    clearUsers,
  }

  return (
    <GithubContext.Provider value={value}>{children}</GithubContext.Provider>
  )
}
