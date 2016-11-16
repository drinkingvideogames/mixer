import React, { Component } from 'react'
import Header from '../header.jsx'
import AdminToolbar from '../admin.jsx'
import LoginModal from '../account/login.jsx'

class MainTemplate extends Component {
  render () {
    return (
      <div>
        <Header />
        <div className='container'>
          {this.props.children}
        </div>
        <AdminToolbar />
        <LoginModal />
      </div>
    )
  }
}

export default MainTemplate
