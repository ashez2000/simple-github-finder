import { createContext, useContext, useReducer } from 'react'

import githubReducer from './githubReducer'

const initialState = {
  users: [],
  loading: false,
  user: {},
  searchUsers: () => {},
  clearUsers: () => {},
}

const GithubContext = createContext(initialState)

export const useGithub = () => useContext(GithubContext)

export const GithubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(githubReducer, initialState)

  const searchUsers = async (text) => {
    dispatch({ type: 'SEARCH_USERS_REQUEST' })

    const res = await fetch(`https://api.github.com/search/users?q=${text}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    })

    const data = await res.json()
    dispatch({ type: 'SEARCH_USERS', payload: data.items })
  }

  const getUser = async (login) => {
    dispatch({ type: 'GET_USER_REQUEST' })

    const res = await fetch(`https://api.github.com/users/${login}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    })

    const data = await res.json()
    dispatch({ type: 'GET_USER', payload: data })
  }

  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' })

  const value = {
    users: state.users,
    user: state.user,
    loading: state.loading,
    searchUsers,
    getUser,
    clearUsers,
  }

  return (
    <GithubContext.Provider value={value}>{children}</GithubContext.Provider>
  )
}
