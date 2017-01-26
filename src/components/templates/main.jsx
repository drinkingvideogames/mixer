import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../header.jsx'
import AdminToolbar from '../admin.jsx'

class MainTemplate extends Component {
  render () {
    return (
      <div>
        <Header isHome={this.props.route.hasOwnProperty('isHome')} />
        <div className='container'>
          {this.props.children}
        </div>
        { this.props.user.email ? <AdminToolbar /> : '' }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(MainTemplate)
