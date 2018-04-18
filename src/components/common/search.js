import React from 'react'

import usersResources from '../../services/resources/users'

import '../../stylesheets/common/search.css'

class Search extends React.Component {
  constructor(){
    super()
    this.state = {
      query: '',
      results: []
    }
  }

  getInfo = () => {
    usersResources.getUsers()
      .then((result) => this.setState({
        results: result.data
      }))
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if(this.state.query && this.state.query.length > 1){
        if(this.state.query.length % 2 === 0){
          this.getInfo()
        }
      }
    })
  }

  render () {
    return (
      <div className='search'>
        <input className='search__element' placeholder="Looking for someone?" ref={(input) => {
          this.search = input}} onChange={this.handleInputChange}/>
      </div>
    )
  }
}

export default Search