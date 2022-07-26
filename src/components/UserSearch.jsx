import { Fragment, useState } from 'react'
import { useGithub } from '../context/github/GithubContext'

const UserSearch = () => {
  const [text, setText] = useState('')

  const { users, searchUsers, clearUsers } = useGithub()

  const handleSubmit = (e) => {
    e.preventDefault()
    searchUsers(text)
    setText('')
  }

  return (
    <Fragment>
      <form className="mb-3 flex space-x-3" onSubmit={handleSubmit}>
        <input
          className="w-60 px-5 py-2 rounded-md bg-light-300 dark:bg-dark-300 focus:outline-none"
          type="text"
          placeholder="Search Users"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <input
          className="px-5 py-2 bg-primary-300 rounded-md font-bold cursor-pointer"
          type="submit"
          value="Search"
        />
      </form>
      {users.length > 0 && (
        <div className="mb-3">
          <button
            className="px-5 py-2 bg-slate-200 dark:bg-dark-300 rounded-md font-bold cursor-pointer"
            onClick={clearUsers}
          >
            Clear
          </button>
        </div>
      )}
    </Fragment>
  )
}

export default UserSearch
