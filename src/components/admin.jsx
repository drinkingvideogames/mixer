import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../actions'

class AdminToolbar extends Component {
  render () {
    let input = {}
    return (
      <div>
        <div className='fixed-action-btn toolbar'>
          <a className='btn-floating btn-large blue'>
            <i className='large material-icons'>mode_edit</i>
          </a>
          <ul>
            <li className='waves-effect waves-light'>
              <a className='modal-trigger' href='#newGameModal'><i className='material-icons'>games</i>New Game</a>
            </li>
            <li className='waves-effect waves-light'>
              <a className='modal-trigger' href='#newGenreModal'><i className='material-icons'>games</i>New Genre</a>
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
                    <input placeholder='Game Name' id='game_name' type='text' className='validate' ref={node => {
                      input.gameName = node
                    }} />
                    <label htmlFor='game_name'>Game Name</label>
                  </div>
                  <div className='input-field col s6'>
                    <input placeholder='/game/:slug' id='game_slug' type='text' className='validate' ref={node => {
                      input.gameUrl = node
                    }} />
                    <label htmlFor='game_slug'>Game Slug</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='modal-footer'>
            <a href='#!' onClick={(e) => {
              e.preventDefault()
              if (!input.gameName.value.trim()) return
              if (!input.gameUrl.value.trim()) return
              this.props.gameAdd(input.gameName.value, input.gameUrl.value, '')
              input.gameName.value = ''
              input.gameUrl.value = ''
            }} className='modal-action modal-close waves-effect waves-green btn green right'>Save</a>
            <a href='#!' className='modal-action modal-close waves-effect waves-red btn red left'>Cancel</a>
          </div>
        </div>
        <div id='newGenreModal' className='modal modal-fixed-footer'>
          <div className='modal-content'>
            <h4><i className='material-icons'>games</i> New Genre</h4>
            <p>Add details for a new genre</p>
            <div className='row'>
              <form className='col s12'>
                <div className='row'>
                  <div className='input-field col s12'>
                    <input placeholder='Genre Name' id='game_name' type='text' className='validate' ref={node => {
                      input.genreName = node
                    }} />
                    <label htmlFor='game_name'>Game Name</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='modal-footer'>
            <a href='#!' onClick={(e) => {
              e.preventDefault()
              if (!input.genreName.value.trim()) return
              this.props.genreAdd(input.genreName.value)
              input.genreName.value = ''
            }} className='modal-action modal-close waves-effect waves-green btn green right'>Save</a>
            <a href='#!' className='modal-action modal-close waves-effect waves-red btn red left'>Cancel</a>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { genres: state.genres }
}

const mapDispatchToProps = (dispatch) => {
  return {
    syncGenreAdd: (name) => { dispatch(actions.genreAdd(name)) },
    gameAdd: (name, url, imageUrl) => { dispatch(actions.gameAdd(name, url, imageUrl)) },
    genreAdd: (name) => { dispatch({ type: 'genre/ADD', payload: { name } }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminToolbar)
