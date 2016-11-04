import React, { Component } from 'react'
import Header from '../header.jsx'
import AdminToolbar from '../admin.jsx'

class MainTemplate extends Component {
  render () {
    return (
      <div>
        <Header />
        <div className='container'>
          {this.props.children}
        </div>
        <AdminToolbar />
      </div>
    )
  }
}

export default MainTemplate
