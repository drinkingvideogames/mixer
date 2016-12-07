const commonHooks = require('../lib/hooks')

const before = {
  create:
  [ commonHooks.setCurrentDateHook('createdAt'),
    commonHooks.setCurrentDateHook('updatedAt')
  ],
  update: [ commonHooks.setCurrentDateHook('updatedAt') ],
  patch: [ commonHooks.setCurrentDateHook('updatedAt') ]
}

module.exports = { before }
