import React, { Component } from 'react'
import Header from '../header.jsx'

class MainTemplate extends Component {
  render () {
    return (
      <div>
        <Header />
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default MainTemplate
