import React, { Component } from 'react'
import { connect } from 'react-redux'
import DropDownMenu from 'material-ui/DropDownMenu'
import Divider from 'material-ui/Divider'
import MenuItem from 'material-ui/MenuItem'

class GenreDropdown extends Component {
  render () {
    const genres = this.props.genres.size > 0 ? this.props.genres.toArray().map((genre, index) => {
      return (<MenuItem key={index} value={index + 1} primaryText={genre.get('name')} />)
    }) : (<MenuItem value={-1} primaryText='No genres to list!' />)

    return (
      <DropDownMenu
        maxHeight={this.props.maxHeight || 300}
        value={this.props.value || 0}
        underlineStyle={{ border: '0' }}
      >
        <MenuItem value={0} primaryText='Choose a genre!' />
        <Divider />
        {genres}
      </DropDownMenu>
    )
  }
}

const mapStateToProps = (state) => {
  return { genres: state.get('genres') }
}

export default connect(mapStateToProps)(GenreDropdown)
