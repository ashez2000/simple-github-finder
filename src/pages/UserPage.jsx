import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useGithub } from '../context/github/GithubContext'
import Spinner from '../components/Spinner'
import UserInfo from '../components/UserInfo'
import RepoCard from '../components/RepoCard'

const UserPage = () => {
  const { fetchUserAndRepos, loading, user, repos } = useGithub()
  const { login } = useParams()

  useEffect(() => {
    fetchUserAndRepos(login)
  }, [])

  if (loading) {
    return <Spinner />
  }

  return (
    <div className="max-w-6xl mx-auto px-3 mb-3 flex flex-col items-center">
      <UserInfo className="mb-3" user={user} />
      <h2 className="text-3xl font-bold mb-3">User Repos</h2>
      <div className="flex flex-col justify-center space-y-3">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  )
}

export default UserPage
