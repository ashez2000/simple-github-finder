const UserInfo = ({ user }) => {
  return (
    <div className="flex space-x-10 items-center">
      <div className="w-40 h-40">
        <img src={user.avatar_url} alt="user's avatar" />
      </div>
      <div>
        <h3 className="font-bold text-2xl">{user.login}</h3>
        <p className="mb-4">{user.bio}</p>
        <div>
          <a
            className="px-5 py-2 bg-blue-400 rounded-md font-bold"
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
          >
            Visit Profile
          </a>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
