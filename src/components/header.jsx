import React, { Component } from 'react'

class Header extends Component {
  render () {
    const styles = {
      autoCompleteInput: { width: '85%', display: 'inline-block' },
      genreBlock: { width: '15%', display: 'inline-block', textAlign: 'center', float: 'right' },
      genreButton: { height: '100%', width: '100%', display: 'block' }
    }
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
                <li><a href='#!'>FPS</a></li>
                <li><a href='#!'>Fighter</a></li>
                <li><a href='#!'>RTS</a></li>
              </ul>
            </div>
          </form>
        </div>
      </nav>
    )
  }
}

export default Header
