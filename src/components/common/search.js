import React from 'react'

import Suggestions from './suggestions'

import '../../stylesheets/common/search.css'

class Search extends React.Component {
  constructor(){
    super()
    this.state = {
      query: '',
      search_results: []
    }
  }

  handleInputChange = () => {
    const { users } = this.props

    if(users) {
      this.setState({
        query: this.search.value
      }, () => {
        if(this.state.query && this.state.query.length > 1){
          if(this.state.query.length % 2 === 0){
            this.setState({
              search_results: this.props.users.filter((user) => {
                const name = user.attributes.name.toLowerCase()
                return name.includes(this.state.query.toLowerCase())
              })
            })
          }
        }
      })
    }
  }

  render () {
    return (
      <div className='search'>
        <input className='search__element' placeholder="Looking for someone?" ref={(input) => {
          this.search = input}} onChange={this.handleInputChange}/>
          <Suggestions results={this.state.search_results}/>
      </div>
    )
  }
}

export default Search