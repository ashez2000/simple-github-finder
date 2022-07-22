import { useGithub } from '../context/github/GithubContext'
import Spinner from './Spinner'
import UserItem from './UserItem'

const UserList = () => {
  const { users, loading } = useGithub()

  if (loading) {
    return <Spinner />
  }

  return (
    <div className="flex justify-center">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </section>
    </div>
  )
}

export default UserList
