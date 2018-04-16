import React from 'react'

import '../../stylesheets/common/search.css'

class Search extends React.Component {
  render () {
    return (
      <div className='search'>
        <input className='search__element' type="text" placeholder="Looking for someone?" />
      </div>
    )
  }
}

export default Search