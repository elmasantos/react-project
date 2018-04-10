import React from 'react'

const PopularBox = () => {
  const renderPopularBox = ({ title, content }) => (
    <div className='popular-box__element'>
      <span className='popular-box__title'>{title}</span>
      <span className='popular-box__element__content'>
        {content}
      </span>
    </div>
  )

  return (
    <div className='popular-box'>
      <div className='popular-box__content'>
        {renderPopularBox({ title: 'MOST POPULAR NAMES', content: 'Teacher' })}
      </div>
    </div>
  )
}

export default PopularBox