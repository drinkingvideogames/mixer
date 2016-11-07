import constants from './constants'

const genreAdd = (name) => ({
  type: constants.genre.ADD.SUCCESS,
  name
})

const gameAdd = (name, url, imageUrl) => ({
  type: constants.game.ADD,
  name,
  url,
  imageUrl
})

export default {
  genreAdd,
  gameAdd
}
