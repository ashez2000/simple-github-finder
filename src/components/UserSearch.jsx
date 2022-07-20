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
      <form className="mb-3" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-10">
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>
          <div className="col-2">
            <div className="d-grid">
              <input className="btn btn-primary" type="submit" value="Search" />
            </div>
          </div>
        </div>
      </form>
      {users.length > 0 && (
        <div className="mb-3">
          <button className="btn" onClick={clearUsers}>
            Clear
          </button>
        </div>
      )}
    </Fragment>
  )
}

export default UserSearch
