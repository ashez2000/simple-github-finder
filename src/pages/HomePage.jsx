import { Fragment } from 'react'

import UserSearch from '../components/UserSearch'
import UserList from '../components/UserList'

const HomePage = () => {
  return (
    <div className="max-w-6xl mx-auto px-3 mb-3 flex flex-col items-center">
      <UserSearch />
      <UserList />
    </div>
  )
}

export default HomePage
