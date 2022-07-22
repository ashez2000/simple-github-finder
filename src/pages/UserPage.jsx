import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useGithub } from '../context/github/GithubContext'
import Spinner from '../components/Spinner'
import UserInfo from '../components/UserInfo'

const UserPage = () => {
  const { fetchUserAndRepos, user, loading } = useGithub()
  const { login } = useParams()

  useEffect(() => {
    fetchUserAndRepos(login)
  }, [])

  if (loading) {
    return <Spinner />
  }

  return (
    <div className="max-w-6xl mx-auto px-3 mb-3">
      <h1>UserPage</h1>
      <UserInfo user={user} />
    </div>
  )
}

export default UserPage
