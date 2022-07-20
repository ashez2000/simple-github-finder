import { useGithub } from '../context/github/GithubContext'
import Spinner from './Spinner'
import UserItem from './UserItem'

const UserList = () => {
  const { users, loading } = useGithub()

  if (loading) {
    return <Spinner />
  }

  return (
    <section>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </section>
  )
}

export default UserList
