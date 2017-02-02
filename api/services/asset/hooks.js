const commonHooks = require('../lib/hooks')

const before = {
  create:
  [ commonHooks.requireAuth(),
    commonHooks.embellishUser(),
    commonHooks.setCurrentDateHook('createdAt'),
    commonHooks.setCurrentDateHook('updatedAt')
  ],
  update: [ commonHooks.setCurrentDateHook('updatedAt') ],
  patch: [ commonHooks.setCurrentDateHook('updatedAt') ]
}

module.exports = { before }
