import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import ModeEditIcon from 'material-ui/svg-icons/editor/mode-edit'

class UsersGamesTables extends Component {
  getGamesList () {
    let games = this.props.games.toArray()
    if (this.props.all) return games
    return games.filter((game) => game.get('userId') && game.get('userId') === this.props.user._id)
  }

  render () {
    const usersGames = (
      this.getGamesList().map((game, i) =>
        <TableRow key={i}>
          <TableRowColumn>{i + 1}</TableRowColumn>
          <TableRowColumn>{game.get('name')}</TableRowColumn>
          <TableRowColumn><Link to={`/game/${game.get('url')}`}>{game.url}</Link></TableRowColumn>
          <TableRowColumn><Link to={`/game/${game.get('url')}/edit`}><ModeEditIcon /></Link></TableRowColumn>
        </TableRow>
      )
    )

    return (
      <div className='card-panel'>
        <span className='card-title'>{this.props.all ? 'All' : 'My'} Games</span>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Slug</TableHeaderColumn>
              <TableHeaderColumn />
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
  return { user: state.get('user'), games: state.get('games') }
}

export default connect(mapStateToProps)(UsersGamesTables)
