import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { Map } from 'immutable'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentSaveIcon from 'material-ui/svg-icons/content/save'
import DrinkingGameCard from './drinking-game-card.jsx'
import GenreDropdown from './parts/genre-dropdown.jsx'

const ContentEditable = require('react-contenteditable')

class Game extends Component {
  constructor (props) {
    super(props)
    const state = this.getState()
    this.state = {
      state: state,
      game: this.getGame(state)
    }
  }

  componentDidUpdate () {
    if (this.state !== 'view' && this.isCurrentUserValid()) {
      return this.props.router.push('/')
    }
    this.getGame()
  }

  isCurrentUserValid () {
    return this.props.user &&
      this.props.user.get('verified') &&
      this.props.user.get('roles').includes('admin')
  }

  getState () {
    let state = 'view'
    state = this.props.route.edit ? 'edit' : state
    state = this.props.route.new ? 'new' : state
    return state
  }

  getGame (state) {
    let game = this.props.games.find((game) => game.get('url') === this.props.routeParams.game)
    if (state === 'new') {
      game = Map({ name: 'New Game' })
    }
    return game
  }

  saveGame () {
    console.log(this.state)
  }

  render () {
    const drinkingGames = this.state.state === 'view' ? (
      this.props.drinkingGames.toJS().map((drinkingGame, index) => {
        return (<div className='col s12 m6 l3' key={index}>
          <DrinkingGameCard game={this.state.game.toJS()} drinkingGame={drinkingGame} />
        </div>)
      })
    ) : (
      <p style={{ textAlign: 'center' }}>Games will be displayed here</p>
    )

    const style = {
      marginLeft: 20
    }

    const dropStyles = {
      backgroundColor: '#eee',
      boxSizing: 'border-box',
      textAlign: 'center',
      minHeight: '10vh',
      display: 'table',
      width: '100%'
    }

    const iconDrop = this.state.game && this.state.game.has('iconImageUrl')
      ? <img className='image-preview' src={this.state.game.get('iconImageUrl')} />
      : <div className='image-preview'>Click or drop to upload Icon Image</div>

    const imageDrop = this.state.game && this.state.game.has('imageUrl')
      ? <img className='image-preview' src={this.state.game.get('imageUrl')} />
      : <div className='image-preview'>Click or drop to upload Main Image</div>

    const detailsToolbar = this.state.state === 'view' ? '' : (
      <Paper zDepth={2}>
        <Subheader>Other Game Details</Subheader>
        <Divider />
        <div className='row'>
          <div className='col s6'>
            <TextField
              hintText='/game/:slug'
              value={this.state.game.get('url')}
              style={style}
              underlineShow={false}
              onChange={(e, val) => { this.setState({ game: this.state.game.set('url', val) }) }}
            />
          </div>
          <div className='col s6'>
            <GenreDropdown />
          </div>
        </div>
        <div className='row'>
          <div className='col s6'>
            <div style={dropStyles}>{iconDrop}</div>
          </div>
          <div className='col s6'>
            <div style={dropStyles}>{imageDrop}</div>
          </div>
        </div>
        <Divider />
      </Paper>
    )

    const editFab = this.state.state === 'view' ? '' : (
      <FloatingActionButton
        style={{ position: 'absolute', top: '100px', right: '100px' }}
        onClick={this.saveGame.bind(this)}
      >
        <ContentSaveIcon />
      </FloatingActionButton>
    )

    if (this.state.game) {
      return (
        <div>
          <nav>
            <div className='nav-wrapper blue'>
              <a
                href='#'
                className='brand-logo center'
              >
                <ContentEditable
                  html={this.state.game.get('name')}
                  disabled={this.state.state === 'view'}
                  onChange={(e) => { this.setState({ game: this.state.game.set('name', e.target.value) }) }}
                />
              </a>
            </div>
          </nav>
          <div className='row'>
            <div className='col s12 m12'>
              <div className='card'>
                <div className='card-content'>
                  <span className='card-title'>Drinking Games</span>
                  <div className='row'>
                    {drinkingGames}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {detailsToolbar}
          {editFab}
        </div>
      )
    } else {
      return (<div>Sorry, no such game could be found!</div>)
    }
  }
}

const mapStateToProps = (state) => {
  return { games: state.get('games'), drinkingGames: state.get('drinkingGames'), user: state.get('user') }
}

export default connect(mapStateToProps)(withRouter(Game))
