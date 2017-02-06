import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import Snackbar from 'material-ui/Snackbar'
import UsersTable from './users-table.jsx'
import UsersGamesTable from './users-games-table.jsx'

class Profile extends Component {
  componentDidMount () {
    if (!this.props.user || !this.props.user.has('email')) return this.props.router.push('/')
  }

  componentDidUpdate () {
    if (!this.props.user || !this.props.user.has('email')) return this.props.router.push('/')
  }

  logout () {
    this.props.userLogout()
    this.props.router.push('/')
  }

  render () {
    const verifySnackbar = (
      !this.props.user.get('verified') ? (
        <Snackbar
          open
          message='Please verify your email!'
        />
      ) : ''
    )

    const usersTable = this.props.user.get('roles').includes('superadmin') ? (
      <div className='row'>
        <UsersTable />
      </div>
    ) : ''

    const usersGamesTable = this.props.user.get('roles').includes('admin') ? (
      <div className='row'>
        <UsersGamesTable />
      </div>
    ) : ''

    const allGamesTable = this.props.user.get('roles').includes('superadmin') ? (
      <div className='row'>
        <UsersGamesTable all />
      </div>
    ) : ''

    return (
      <div>
        <div className='row'>
          <div className='card-panel'>
            <Toolbar>
              <ToolbarGroup>
                <ToolbarTitle text={`Account: ${this.props.user.get('email')}`} />
              </ToolbarGroup>
              <ToolbarGroup>
                <RaisedButton label='Logout' primary onClick={this.logout.bind(this)} />
              </ToolbarGroup>
            </Toolbar>
          </div>
        </div>
        {usersGamesTable}
        {usersTable}
        {allGamesTable}
        {verifySnackbar}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.get('user') }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: () => { dispatch({ type: 'USER_LOGOUT', payload: {} }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile))
