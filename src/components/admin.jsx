import React, { Component } from 'react'
import Toolbar from './admin/toolbar.jsx'
import NewGameModal from './admin/modals/new-game.jsx'
import NewGenreModal from './admin/modals/new-genre.jsx'

class AdminToolbar extends Component {
  componentDidMount () {
    $(document).ready(function () {
      $('.modal').modal()
    })
  }

  render () {
    return (
      <div>
        <Toolbar />
        <NewGameModal />
        <NewGenreModal />
      </div>
    )
  }
}

export default AdminToolbar
