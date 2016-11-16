const actionTypes = {
  genre: {
    ADD: {
      SUCCESS: 'genre/ADD/SUCCESS',
      FAILED: 'genre/ADD/FAILED'
    }
  },
  game: {
    ADD: {
      SUCCESS: 'game/ADD/SUCCESS',
      FAILED: 'game/ADD/FAILED'
    }
  },
  drinkingGame: {
    ADD: 'drinkingGame/ADD'
  },
  user: {
    LOGIN: {
      SUCCESS: 'user/LOGIN/SUCCESS',
      FAILED: 'user/LOGIN/FAILED'
    },
    REGISTER: {
      SUCCESS: 'user/REGISTER/SUCCESS',
      FAILED: 'user/REGISTER/FAILED'
    }
  }
}

export default actionTypes
