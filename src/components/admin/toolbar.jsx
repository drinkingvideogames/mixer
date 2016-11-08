import React, { Component } from 'react'

class AdminToolbar extends Component {
  render () {
    return (
      <div className='fixed-action-btn toolbar'>
        <a className='btn-floating btn-large blue'>
          <i className='large material-icons'>mode_edit</i>
        </a>
        <ul>
          <li className='waves-effect waves-light'>
            <a className='modal-trigger' href='#newGenreModal'><i className='material-icons'>star</i>New Genre</a>
          </li>
          <li className='waves-effect waves-light'>
            <a className='modal-trigger' href='#newGameModal'><i className='material-icons'>games</i>New Game</a>
          </li>
          <li className='waves-effect waves-light'>
            <a className='modal-trigger' href='#newDrinkingGameModal'><i className='material-icons'>local_bar</i>New Drinking Game</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default AdminToolbar
