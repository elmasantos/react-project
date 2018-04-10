import React from 'react'

import '../../stylesheets/common/popular-box.css'

const PopularBox = ({ title, list }) => {
  const renderContent = () => (
    <div className='popular-box__element'>
      <span className='popular-box__element__content'>
        { Object.keys(list).splice(0, 6).map((name, index) => (
            <span
              className='popular-box__item'
              key={index}
            >
              {name}&nbsp;
            </span>
         ))}
      </span>
    </div>
  )

  return (
    <div className='popular-box'>
      <div className='popular-box__content'>
        <span className='popular-box__title'>{title}</span>
        {renderContent()}
      </div>
    </div>
  )
}

PopularBox.defaultProps = {
  title: '',
  list: {},
}

export default PopularBox