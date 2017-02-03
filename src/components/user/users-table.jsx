import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'

class UsersTable extends Component {
  componentDidMount () {
    this.props.usersLoad()
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
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}

const mapDispatchToProps = (dispatch) => {
  return {
    usersLoad: () => { dispatch({ type: 'USERS_LOAD', payload: {} }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable)
