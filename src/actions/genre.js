import constants from './constants'

const genreAdd = (name) => ({
  type: constants.genre.ADD.SUCCESS,
  name
})

const genreUpdate = (name) => ({
  type: constants.genre.UPDATE.SUCCESS,
  name
})

const genreDelete = (genre) => ({
  type: constants.genre.ADD.SUCCESS
})

export default {
  add: genreAdd,
  update: genreUpdate,
  delete: genreDelete
}
