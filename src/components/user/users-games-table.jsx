import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'

class UsersGamesTables extends Component {
  componentDidMount () {
    this.props.usersLoad()
  }

  render () {
    const usersGames = (
      this.props.games
        .filter((game) => game.userId && game.userId === this.props.user._id)
        .map((game, i) =>
          <TableRow key={i}>
            <TableRowColumn>{i + 1}</TableRowColumn>
            <TableRowColumn>{game.name}</TableRowColumn>
            <TableRowColumn><Link to={`/game/${game.url}`}>{game.url}</Link></TableRowColumn>
          </TableRow>
        )
    )

    return (
      <div className='card-panel'>
        <span className='card-title'>My Games</span>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Slug</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {usersGames}
          </TableBody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user, games: state.games }
}

export default connect(mapStateToProps)(UsersGamesTables)
