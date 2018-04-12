import React from 'react'

import '../../stylesheets/common/header.css'

const Header = ({profiles, names, jobs}) => {
  const renderStatistics = ({ value, label }) => (
    <div className='header__statistics__element'>
      <span className='header__statistics__element__value'>
        {value}
      </span>
      <span className='header__statistics__element__label'>
        {label}
      </span>
    </div>
  )

  return (
    <div className='header'>
      <div className='header__title'>Profiles</div>
      <div className='header__statistics'>
        {renderStatistics({ value: profiles, label: 'Profiles' })}
        {renderStatistics({ value: names, label: 'Names' })}
        {renderStatistics({ value: jobs, label: 'Jobs' })}
      </div>
      <div className='header__search'/>
    </div>
  )
}

Header.defaultProps = {
  profiles: {},
  names: {},
  jobs: {},
}

export default Header