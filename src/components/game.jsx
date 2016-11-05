import React, { Component } from 'react'
import { connect } from 'react-redux'

class Game extends Component {
  render () {
    const game = this.props.games.find((game) => game.url === this.props.routeParams.game)

    if (game) {
      return (
        <div>
          <nav>
            <div className='nav-wrapper blue'>
              <a href='#' className='brand-logo center'>{game.name}</a>
            </div>
          </nav>
          <div className='row'>
            <div className='col s12 m12'>
              <div className='card'>
                <div className='card-content'>
                  <span className='card-title'>Drinking Games</span>
                  <div className='row'>
                    <div className='col s3 m3'>
                      <div className='card'>
                        <div className='card-content'>
                          <span className='card-title'>Drinking Game 1</span>
                          <p>I am a very simple card. I am good at containing small bits of information.
                          I am convenient because I require little markup to use effectively.</p>
                        </div>
                      </div>
                    </div>
                    <div className='col s3 m3'>
                      <div className='card'>
                        <div className='card-content'>
                          <span className='card-title'>Drinking Game 2</span>
                          <p>I am a very simple card. I am good at containing small bits of information.
                          I am convenient because I require little markup to use effectively.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (<div>Sorry, no such game could be found!</div>)
    }
  }
}

const mapStateToProps = (state) => {
  return { games: state.games }
}

export default connect(mapStateToProps)(Game)
