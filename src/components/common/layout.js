import React from 'react'

import Header from './header'

const Layout = ({ users, profiles, names, jobs, children }) => {
  return (
    <div className='layout'>
      <Header users={users} profiles={profiles} names={names} jobs={jobs}/>
      {children}
    </div>
  )
}

export default Layout