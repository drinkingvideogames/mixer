import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'

class Profile extends Component {
  componentDidMount () {
    if (!this.props.user.email) this.props.router.push('/')
  }

  componentDidUpdate () {
    if (!this.props.user.email) this.props.router.push('/')
  }

  logout () {
    this.props.userLogout()
    this.props.router.push('/')
  }

  render () {
    return (
      <div className='row'>
        <div className="card-panel">
          <Toolbar>
            <ToolbarGroup>
              <ToolbarTitle text={`Account: ${this.props.user.email}`} />
            </ToolbarGroup>
            <ToolbarGroup>
              <RaisedButton label='Logout' primary={true} onClick={this.logout.bind(this)} />
            </ToolbarGroup>
          </Toolbar>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: () => { dispatch({ type: 'USER_LOGOUT', payload: {} }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile))
