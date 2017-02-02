const commonHooks = require('../lib/hooks')

module.exports = genreHooks = {
  before: {
    create: [
      commonHooks.requireAuth(),
      commonHooks.setCurrentDateHook('createdAt'),
      commonHooks.setCurrentDateHook('updatedAt')
    ]
  }
}