import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Header extends Component {
  componentDidMount () {
    this.updateAutoComplete()
  }

  componentDidUpdate () {
    if (this.props.user.email) swal.close()
    this.updateAutoComplete()
  }

  updateAutoComplete () {
    $(document).ready(() => {
      const data = this.props.games.reduce((data, game) => {
        data[game.name] = game.iconImageUrl
        return data
      }, {})

      $('.autocomplete-content').remove()
      $('input.autocomplete.games').autocomplete({ data })
    })
  }

  getModalSettings (extras) {
    return Object.assign(
      {},
      { title: '',
        html: true,
        customClass: 'show-input',
        showLoaderOnConfirm: true,
        closeOnConfirm: false,
        allowOutsideClick: true
      },
      extras
    )
  }

  openLoginModal () {
    let settings = {
      confirmButtonText: 'Login',
      text: [
        '<input class="js-sw-login-email" type="email" placeholder="Email"/>',
        '<input class="js-sw-login-password" type="password" placeholder="Password"/>'
      ].join('')
    }
    swal(this.getModalSettings(settings), () => {
      let email = $('.js-sw-login-email').val().trim(),
          password = $('.js-sw-login-password').val().trim()
      this.props.userLogin(email, password)
    })
  }

  openRegisterModal () {
    let settings = {
      confirmButtonText: 'Register',
      text: [
        '<input class="js-sw-register-email" type="email" placeholder="Email"/>',
        '<input class="js-sw-register-password" type="password" placeholder="Password"/>'
      ].join('')
    }
    swal(this.getModalSettings(settings), () => {
      let email = $('.js-sw-register-email').val().trim(),
          password = $('.js-sw-register-password').val().trim()
      this.props.userRegister(email, password)
    })
  }

  render () {
    const styles = {
      autoCompleteInput: { width: '75%', display: 'inline-block' },
      rightBlock: { width: '25%' },
      genreButton: { width: '50%', textAlign: 'center' }
    }

    if (this.props.user.email) {
      styles.autoCompleteInput.width = '85%'
      styles.rightBlock.width = '15%'
      styles.genreButton.width = '70%'
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
            <ul className='right' style={styles.rightBlock}>
              <li style={styles.genreButton}><a className='dropdown-button' href='#' data-activates='genresDropdown'>Genres</a></li>
              {this.props.user.email ? <li><Link to='/profile'><i className='material-icons'>account_circle</i></Link></li> : ''}
              {this.props.user.email ? '' : <li onClick={this.openRegisterModal.bind(this)}><a>Register</a></li>}
              {this.props.user.email ? '' : <li onClick={this.openLoginModal.bind(this)}><a>Login</a></li>}
            </ul>
            <ul id='genresDropdown' className='dropdown-content'>
              {genres}
            </ul>
          </form>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return { genres: state.genres, games: state.games, user: state.user }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userRegister: (email, password) => { dispatch({ type: 'USER_REGISTER', payload: { email, password } }) },
    userLogin: (email, password) => { dispatch({ type: 'USER_LOGIN', payload: { email, password } }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
