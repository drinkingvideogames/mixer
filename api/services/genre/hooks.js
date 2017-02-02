const commonHooks = require('../lib/hooks')

const genreHooks = {
  before: {
    create: [
      commonHooks.requireAuth(),
      commonHooks.embellishUser(),
      commonHooks.setCurrentDateHook('createdAt'),
      commonHooks.setCurrentDateHook('updatedAt')
    ]
  }
}

module.exports = genreHooks
