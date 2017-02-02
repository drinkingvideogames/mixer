import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'

class Profile extends Component {
  componentDidMount () {
    if (!this.props.user.email) return this.props.router.push('/')
    this.props.usersLoad()
  }

  componentDidUpdate () {
    if (!this.props.user.email) return this.props.router.push('/')
  }

  logout () {
    this.props.userLogout()
    this.props.router.push('/')
  }

  render () {
    const users = (
      this.props.users.map((user, i) =>
        <TableRow key={i}>
          <TableRowColumn>{i + 1}</TableRowColumn>
          <TableRowColumn>{user.email}</TableRowColumn>
        </TableRow>
      )
    )
    return (
      <div>
        <div className='row'>
          <div className='card-panel'>
            <Toolbar>
              <ToolbarGroup>
                <ToolbarTitle text={`Account: ${this.props.user.email}`} />
              </ToolbarGroup>
              <ToolbarGroup>
                <RaisedButton label='Logout' primary onClick={this.logout.bind(this)} />
              </ToolbarGroup>
            </Toolbar>
          </div>
        </div>
        <div className='row'>
          <div className='card-panel'>
            <span className='card-title'>Users</span>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn>ID</TableHeaderColumn>
                  <TableHeaderColumn>Email</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user, users: state.users }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: () => { dispatch({ type: 'USER_LOGOUT', payload: {} }) },
    usersLoad: () => { dispatch({ type: 'USERS_LOAD', payload: {} }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile))
