const actionTypes = {
  genre: {
    ADD: {
      SUCCESS: 'genre/ADD/SUCCESS',
      FAILED: 'genre/ADD/FAILED'
    },
    UPDATE: {
      SUCCESS: 'genre/UPDATE/SUCCESS',
      FAILED: 'genre/UPDATE/FAILED'
    },
    DELETE: {
      SUCCESS: 'genre/DELETE/SUCCESS',
      FAILED: 'genre/DELETE/FAILED'
    }
  },
  game: {
    ADD: {
      SUCCESS: 'game/ADD/SUCCESS',
      FAILED: 'game/ADD/FAILED'
    },
    UPDATE: {
      SUCCESS: 'game/UPDATE/SUCCESS',
      FAILED: 'game/UPDATE/FAILED'
    },
    DELETE: {
      SUCCESS: 'game/DELETE/SUCCESS',
      FAILED: 'game/DELETE/FAILED'
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
    },
    LOGOUT: {
      SUCCESS: 'user/LOGOUT/SUCCESS',
      FAILED: 'user/LOGOUT/FAILED'
    },
    DELETE: {
      SUCCESS: 'user/DELETE/SUCCESS',
      FAILED: 'user/DELETE/FAILED'
    }
  },
  users: {
    LOAD: {
      SUCCESS: 'users/LOAD/SUCCESS',
      FAILED: 'users/LOAD/FAILED'
    }
  },
  errors: {
    CLEAR: 'errors/CLEAR'
  }
}

export default actionTypes
