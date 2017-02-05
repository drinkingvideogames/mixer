import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory, Link } from 'react-router'

class Header extends Component {
  componentDidMount () {
    this.updateAutoComplete()
  }

  componentDidUpdate () {
    if (this.props.user.email) swal.close()
    if (this.getUserLoginError()) {
      this.openErrorModal()
    }
    this.updateAutoComplete()
  }

  getUserLoginError () {
    return this.props.errors.userLogin &&
      this.props.errors.userLogin.message !== 'jwt expired'
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
        showLoaderOnConfirm: true,
        allowOutsideClick: true
      },
      extras
    )
  }

  openErrorModal () {
    const settings = {
      title: 'There was an error!',
      type: 'error',
      showLoaderOnConfirm: false
    }
    swal(this.getModalSettings(settings)).then(() => {
      this.props.clearError('userLogin')
    })
  }

  openLoginModal () {
    const settings = {
      confirmButtonText: 'Login',
      html: [
        '<input class="js-sw-login-email" type="email" placeholder="Email" tabindex="1"/>',
        '<input class="js-sw-login-password" type="password" placeholder="Password" tabindex="2"/>'
      ].join('')
    }
    swal(this.getModalSettings(settings)).then(() => {
      let email = $('.js-sw-login-email').val().trim()
      let password = $('.js-sw-login-password').val().trim()
      this.props.userLogin(email, password)
    })
  }

  openRegisterModal () {
    const settings = {
      confirmButtonText: 'Register',
      html: [
        '<input class="js-sw-register-email" type="email" placeholder="Email" tabindex="1"/>',
        '<input class="js-sw-register-password" type="password" placeholder="Password" tabindex="2"/>'
      ].join('')
    }
    swal(this.getModalSettings(settings)).then(() => {
      let email = $('.js-sw-register-email').val().trim()
      let password = $('.js-sw-register-password').val().trim()
      this.props.userRegister(email, password)
    })
  }

  goBack () {
    browserHistory.goBack()
  }

  render () {
    const styles = {
      autoCompleteInput: { width: '70%', display: 'inline-block' },
      rightBlock: { width: '25%' },
      genreButton: { width: '50%', textAlign: 'center' },
      backButton: {
        width: '5%',
        textAlign: 'center',
        display: 'inline-block',
        float: 'left',
        cursor: 'pointer'
      }
    }

    if (this.props.user.email) {
      styles.autoCompleteInput.width = '80%'
      styles.rightBlock.width = '15%'
      styles.genreButton.width = '70%'
    }

    const genres = this.props.genres.length > 0 ? this.props.genres.map((genre, index) => {
      return (<li key={index}><a href='#!'>{genre.name}</a></li>)
    }) : (<li><a href='#!'>No genres to list!</a></li>)

    const homeIcon = this.props.isHome ? (
      <div style={styles.backButton}>
        Home
      </div>
    ) : (
      <div style={styles.backButton} onClick={this.goBack}>
        <i className='material-icons'>arrow_back</i>
      </div>
    )

    return (
      <nav>
        <div className='nav-wrapper blue'>
          <form>
            {homeIcon}
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
  return { genres: state.genres, games: state.games, user: state.user, errors: state.errors }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userRegister: (email, password) => { dispatch({ type: 'USER_REGISTER', payload: { email, password } }) },
    userLogin: (email, password) => { dispatch({ type: 'USER_LOGIN', payload: { email, password } }) },
    clearError: (errorName) => { dispatch({ type: 'ERROR_CLEAR', payload: { errorName } }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
