import { Link } from 'react-router-dom'

const UserItem = ({ user }) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4" style={{ maxWidth: '5rem' }}>
          <img
            src={user.avatar_url}
            className="img-fluid rounded-start"
            alt={`${user.login}'s avatar`}
            width="100%"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{user.login}</h5>
            <p className="card-text">
              <Link to={`/user/${user.login}`}>
                <small className="text-muted">Visit Profile</small>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserItem
