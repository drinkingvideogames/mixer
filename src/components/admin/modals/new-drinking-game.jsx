import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../../actions'

class NewDrinkingGameModal extends Component {
  render () {
    let input = {}

    const games = this.props.games.size > 0 ? this.props.games.toArray().map((game, index) => {
      return (<li key={index}><a href='#!'>{game.get('name')}</a></li>)
    }) : (<li><a href='#!'>No games to list!</a></li>)

    return (
      <div id='newDrinkingGameModal' className='modal modal-fixed-footer'>
        <div className='modal-content'>
          <h4><i className='material-icons'>local_bar</i> New Drinking Game</h4>
          <p>Add details for a new drinking game</p>
          <div className='row'>
            <form className='col s12'>
              <div className='row'>
                <div className='input-field col s6'>
                  <input placeholder='Drinking Game Name' id='game_name' type='text' className='validate' ref={node => {
                    input.gameName = node
                  }} />
                  <label htmlFor='game_name'>Drinking Game Name</label>
                </div>
                <div className='input-field col s6'>
                  <input placeholder='/game/:game/drink/:slug' id='game_slug' type='text' className='validate' ref={node => {
                    input.gameUrl = node
                  }} />
                  <label htmlFor='game_slug'>Game Slug</label>
                </div>
              </div>
              <div className='row'>
                <a className='dropdown-button btn' href='#' data-beloworigin='true' data-constrainwidth='false' data-activates='gameDropdown'>Game</a>
                <ul id='gameDropdown' className='dropdown-content'>
                  {games}
                </ul>
              </div>
            </form>
          </div>
        </div>
        <div className='modal-footer'>
          <a href='#!' onClick={(e) => {
            e.preventDefault()
            if (!input.gameName.value.trim()) return
            if (!input.gameUrl.value.trim()) return
            this.props.drinkingGameAdd({}, input.gameName.value, input.gameUrl.value)
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
  return { games: state.get('games') }
}

const mapDispatchToProps = (dispatch) => {
  return {
    drinkingGameAdd: (game, name, url) => { dispatch(actions.drinkingGameAdd(game, name, url)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDrinkingGameModal)
