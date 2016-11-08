import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../../actions'

class NewGameModal extends Component {
  render () {
    let input = {}
    return (
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
    )
  }
}

const mapStateToProps = (state) => {
  return { genres: state.genres }
}

const mapDispatchToProps = (dispatch) => {
  return {
    gameAdd: (name, url, imageUrl) => { dispatch({ type: 'GAME_ADD', payload: { name, url, imageUrl } }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewGameModal)
