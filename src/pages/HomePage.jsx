import { Fragment } from 'react'

import UserSearch from '../components/UserSearch'
import UserList from '../components/UserList'

const HomePage = () => {
  return (
    <Fragment>
      <UserSearch />
      <UserList />
    </Fragment>
  )
}

export default HomePage
