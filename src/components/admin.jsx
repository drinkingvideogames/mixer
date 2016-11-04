import React, { Component } from 'react'

class AdminToolbar extends Component {
  render () {
    return (
      <div>
        <div className='fixed-action-btn toolbar'>
          <a className='btn-floating btn-large blue'>
            <i className='large material-icons'>mode_edit</i>
          </a>
          <ul>
            <li className='waves-effect waves-light'>
              <a className='modal-trigger' href='#newGameModal'><i className='material-icons'>Games</i>New Game</a>
            </li>
            <li className='waves-effect waves-light'>
              <a href='#!'><i className='material-icons'>format_quote</i></a>
            </li>
            <li className='waves-effect waves-light'>
              <a href='#!'><i className='material-icons'>publish</i></a>
            </li>
            <li className='waves-effect waves-light'>
              <a href='#!'><i className='material-icons'>attach_file</i></a>
            </li>
          </ul>
        </div>
        <div id='newGameModal' className='modal modal-fixed-footer'>
          <div className='modal-content'>
            <h4><i className='material-icons'>games</i> New Game</h4>
            <p>Add details for a new game</p>
            <div className='row'>
              <form className='col s12'>
                <div className='row'>
                  <div className='input-field col s6'>
                    <input placeholder='Game Name' id='game_name' type='text' className='validate' />
                    <label htmlFor='game_name'>Game Name</label>
                  </div>
                  <div className='input-field col s6'>
                    <input placeholder='/game/:slug' id='game_slug' type='text' className='validate' />
                    <label htmlFor='game_slug'>Game Slug</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='modal-footer'>
            <a href='#!' className='modal-action modal-close waves-effect waves-green btn green right'>Save</a>
            <a href='#!' className='modal-action modal-close waves-effect waves-red btn red left'>Cancel</a>
          </div>
        </div>
      </div>
    )
  }
}

export default AdminToolbar
