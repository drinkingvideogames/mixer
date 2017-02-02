import React, { Component } from 'react'
import { connect } from 'react-redux'

const Dropzone = require('react-dropzone')

class NewGameModal extends Component {
  constructor () {
    super()
    this.input = {}
  }

  onDrop (field, accepted, rejected) {
    if (accepted.length > 0) {
      this.input[field] = accepted[0]
      this.forceUpdate()
    }
  }

  render () {
    const iconImage = this.input['iconImage']
    const image = this.input['image']
    const iconDrop = iconImage && iconImage.preview
      ? <img className='image-preview' src={iconImage.preview} />
      : <div className='image-preview'>Click or drop to upload Icon Image</div>
    const imageDrop = image && image.preview
      ? <img className='image-preview' src={image.preview} />
      : <div className='image-preview'>Click or drop to upload Main Image</div>
    const dropStyles = {
      backgroundColor: '#eee',
      textAlign: 'center',
      minHeight: '10vh',
      display: 'table',
      width: '100%'
    }
    return (
      <div id='newGameModal' className='modal modal-fixed-footer'>
        <div className='modal-content'>
          <h4><i className='material-icons'>games</i> New Game</h4>
          <p>Add details for a new game</p>
          <div className='row'>
            <form className='col s12'>
              <div className='row'>
                <div className='input-field col s12 m6'>
                  <input placeholder='Game Name' id='game_name' type='text' className='validate' ref={node => {
                    this.input.gameName = node
                  }} />
                  <label htmlFor='game_name'>Game Name</label>
                </div>
                <div className='input-field col s12 m6'>
                  <input placeholder='/game/:slug' id='game_slug' type='text' className='validate' ref={node => {
                    this.input.gameUrl = node
                  }} />
                  <label htmlFor='game_slug'>Game Slug</label>
                </div>
                <div className='row'>
                  <div className='col s12 m6'>
                    <Dropzone style={dropStyles} onDrop={this.onDrop.bind(this, 'iconImage')} multiple={false} accept={'image/*'}>
                      {iconDrop}
                    </Dropzone>
                  </div>
                  <div className='col s12 m6'>
                    <Dropzone style={dropStyles} onDrop={this.onDrop.bind(this, 'image')} multiple={false} accept={'image/*'}>
                      {imageDrop}
                    </Dropzone>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='modal-footer'>
          <a href='#!' onClick={(e) => {
            e.preventDefault()
            if (!this.input.gameName.value.trim()) return
            if (!this.input.gameUrl.value.trim()) return
            this.props.gameAdd(this.input.gameName.value, this.input.gameUrl.value, this.input.image, this.input.iconImage)
            this.input.gameName.value = ''
            this.input.gameUrl.value = ''
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
    gameAdd: (name, url, imageUrl, iconImageUrl) => { dispatch({ type: 'GAME_ADD', payload: { name, url, imageUrl, iconImageUrl } }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewGameModal)
