import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useGithub } from '../context/github/GithubContext'
import Spinner from '../components/Spinner'

const UserPage = () => {
  const { getUserAndRepos, user, loading } = useGithub()
  const { login } = useParams()

  useEffect(() => {
    getUserAndRepos(login)
  }, [])

  if (loading) {
    return <Spinner />
  }

  return (
    <div>
      <h1>UserPage</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}

export default UserPage
