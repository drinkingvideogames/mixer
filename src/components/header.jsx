import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
  componentDidMount () {
    this.updateAutoComplete()
  }

  componentDidUpdate () {
    this.updateAutoComplete()
  }

  updateAutoComplete () {
    $(document).ready(() => {
      const data = this.props.games.reduce((data, game) => {
        data[game.name] = game.imageUrl
        return data
      }, {})

      $('.autocomplete-content').remove()
      $('input.autocomplete.games').autocomplete({ data })
    })
  }

  render () {
    const styles = {
      autoCompleteInput: { width: '85%', display: 'inline-block' },
      genreBlock: { width: '15%', display: 'inline-block', textAlign: 'center', float: 'right' },
      genreButton: { height: '100%', width: '100%', display: 'block' }
    }

    const genres = this.props.genres.length > 0 ? this.props.genres.map((genre, index) => {
      return (<li key={index}><a href='#!'>{genre.name}</a></li>)
    }) : (<li><a href='#!'>No genres to list!</a></li>)

    return (
      <nav>
        <div className='nav-wrapper blue'>
          <form>
            <div className='input-field' style={styles.autoCompleteInput}>
              <input type='search' id='autocomplete-input' className='autocomplete games' autoComplete='off' />
              <label htmlFor='autocomplete'><i className='material-icons'>search</i></label>
              <i className='material-icons'>close</i>
            </div>
            <div style={styles.genreBlock}>
              <a className='dropdown-button' href='#' data-activates='genresDropdown' style={styles.genreButton}>Genres</a>
              <ul id='genresDropdown' className='dropdown-content'>
                {genres}
              </ul>
            </div>
          </form>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return { genres: state.genres, games: state.games }
}

export default connect(mapStateToProps)(Header)
