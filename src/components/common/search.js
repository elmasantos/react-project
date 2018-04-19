import React from 'react'

import usersResources from '../../services/resources/users'
import Suggestions from './suggestions'

import '../../stylesheets/common/search.css'

class Search extends React.Component {
  constructor(){
    super()
    this.state = {
      query: '',
      results: [],
      search_results: []
    }
  }

  componentWillMount() {
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
          this.setState({
            search_results: this.state.results.filter((user) => user.attributes.name.includes(this.state.query.toLowerCase()))
          })
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