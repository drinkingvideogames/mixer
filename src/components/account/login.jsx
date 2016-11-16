import React, { Component } from 'react'
import { connect } from 'react-redux'

class LoginModal extends Component {
  constructor () {
    super()
    this.input = {}
  }

  render () {
    return (
      <div id='loginModal' className='modal modal-fixed-footer'>
        <div className='modal-content'>
          <h4><i className='material-icons'>account_circle</i> Login</h4>
          <p>Enter Username and Password</p>
          <div className='row'>
            <form className='col s12'>
              <div className='row'>
                <div className='input-field col s12 m6'>
                  <input placeholder='Email' id='login_email' type='text' className='validate' ref={node => {
                    this.input.loginEmail = node
                  }} />
                  <label htmlFor='login_email'>Email</label>
                </div>
                <div className='input-field col s12 m6'>
                  <input placeholder='Password' id='login_password' type='password' className='validate' ref={node => {
                    this.input.loginPassword = node
                  }} />
                  <label htmlFor='login_password'>Password</label>
                </div>
              </div>
              <a href='#!' onClick={(e) => {
                e.preventDefault()
                if (!this.input.loginEmail.value.trim()) return
                if (!this.input.loginPassword.value.trim()) return
                this.props.userLogin(this.input.loginEmail.value, this.input.loginPassword.value)
                this.input.loginEmail.value = ''
                this.input.loginPassword.value = ''
              }} className='modal-action modal-close waves-effect waves-green btn green left'>Login</a>
            </form>
          </div>
          <h4><i className='material-icons'>account_circle</i> Register</h4>
          <p>Enter a New Username and Password</p>
          <div className='row'>
            <form className='col s12'>
              <div className='row'>
                <div className='input-field col s12 m6'>
                  <input placeholder='Email' id='register_email' type='text' className='validate' ref={node => {
                    this.input.registerEmail = node
                  }} />
                  <label htmlFor='register_email'>Email</label>
                </div>
                <div className='input-field col s12 m6'>
                  <input placeholder='Password' id='register_password' type='password' className='validate' ref={node => {
                    this.input.registerPassword = node
                  }} />
                  <label htmlFor='register_password'>Password</label>
                </div>
              </div>
              <a href='#!' onClick={(e) => {
                e.preventDefault()
                if (!this.input.registerEmail.value.trim()) return
                if (!this.input.registerPassword.value.trim()) return
                this.props.userRegister(this.input.registerEmail.value, this.input.registerPassword.value)
                this.input.registerEmail.value = ''
                this.input.registerPassword.value = ''
              }} className='modal-action modal-close waves-effect waves-green btn green left'>Register</a>
            </form>
          </div>
        </div>
        <div className='modal-footer'>
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
    userRegister: (email, password) => { dispatch({ type: 'USER_REGISTER', payload: { email, password } }) },
    userLogin: (email, password) => { dispatch({ type: 'USER_LOGIN', payload: { email, password } }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal)
