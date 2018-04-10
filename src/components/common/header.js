import React from 'react'

import '../../stylesheets/common/header.css'

const Header = () => {
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
        {renderStatistics({ value: 55, label: 'Profiles' })}
        {renderStatistics({ value: 55, label: 'Names' })}
        {renderStatistics({ value: 55, label: 'Jobs' })}
      </div>
      <div className='header__search'/>
    </div>
  )
}

export default Header