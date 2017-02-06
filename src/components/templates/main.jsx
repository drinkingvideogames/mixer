import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../header.jsx'
import AdminToolbar from '../admin.jsx'

class MainTemplate extends Component {
  render () {
    return (
      <div>
        <Header isHome={this.props.route.isHome} />
        <div className='container'>
          {this.props.children}
        </div>
        { this.props.user && this.props.user.has('email') && this.props.user.get('verified') ? <AdminToolbar /> : '' }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.get('user') }
}

export default connect(mapStateToProps)(MainTemplate)
