import { Link } from 'react-router-dom'

const UserItem = ({ user }) => {
  return (
    <div className="flex p-5 max-w-xs bg-light-200 dark:bg-dark-300 rounded-md">
      <img
        className="w-20 h-20 rounded-full mr-3"
        src={user.avatar_url}
        alt="user's avatar image"
      />
      <div className="flex flex-col justify-center">
        <h2 className="font-bold">{user.login}</h2>
        <Link className="text-primary-300" to={`/user/${user.login}`}>
          Show Profile
        </Link>
      </div>
    </div>
  )
}

export default UserItem
