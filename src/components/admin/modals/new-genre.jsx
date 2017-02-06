import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewGenreModal extends Component {
  render () {
    let input = {}
    return (
      <div id='newGenreModal' className='modal modal-fixed-footer'>
        <div className='modal-content'>
          <h4><i className='material-icons'>star</i> New Genre</h4>
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
    )
  }
}

const mapStateToProps = (state) => {
  return { genres: state.get('genres') }
}

const mapDispatchToProps = (dispatch) => {
  return {
    genreAdd: (name) => { dispatch({ type: 'GENRE_ADD', payload: { name } }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewGenreModal)
