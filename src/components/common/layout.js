import React from 'react'

import Header from './header'

const Layout = ({ profiles, names, jobs, children }) => {
  return (
    <div className='layout'>
      <Header profiles={profiles} names={names} jobs={jobs}/>
      {children}
    </div>
  )
}

export default Layout