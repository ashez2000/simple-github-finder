import { createContext, useContext, useReducer } from 'react'

import githubApi from '../../utils/api'
import githubReducer from './githubReducer'

const initialState = {
  users: [],
  loading: false,
  user: {},
  searchUsers: () => {},
  clearUsers: () => {},
  getUserAndRepos: () => {},
}

const GithubContext = createContext(initialState)

export const useGithub = () => useContext(GithubContext)

export const GithubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(githubReducer, initialState)

  const searchUsers = async (text) => {
    dispatch({ type: 'SEARCH_USERS_REQUEST' })
    const data = await githubApi(`/search/users?q=${text}`)
    dispatch({ type: 'SEARCH_USERS', payload: data.items })
  }

  const getUserAndRepos = async (login) => {
    dispatch({ type: 'GET_USER_REQUEST' })

    const [userData, repos] = await Promise.all([
      githubApi(`/users/${login}`),
      githubApi(`/users/${login}/repos`),
    ])

    dispatch({ type: 'GET_USER', payload: { userData, repos } })
  }

  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' })

  const value = {
    users: state.users,
    user: state.user,
    loading: state.loading,
    searchUsers,
    getUserAndRepos,
    clearUsers,
  }

  return (
    <GithubContext.Provider value={value}>{children}</GithubContext.Provider>
  )
}
