import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

class Profile extends Component {
  componentDidMount () {
    if (!this.props.user.email) this.props.router.push('/')
  }

  componentDidUpdate () {
    if (!this.props.user.email) this.props.router.push('/')
  }

  logout () {
    this.props.userLogout()
    this.props.router.push('/')
  }

  render () {
    return (
      <div className='row'>
        {this.props.user.email}
        <button onClick={this.logout.bind(this)}>Logout</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: () => { dispatch({ type: 'USER_LOGOUT', payload: {} }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile))
