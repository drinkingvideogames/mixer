const commonHooks = require('../lib/hooks')

function prepareAssetEntry (assetServiceName, tags) {
  return (hook) => {
    const baseUrl = hook.app.service(assetServiceName).baseUrl
    const asset = { url: baseUrl + hook.result.id, tags }
    return new Promise((resolve, reject) => {
      hook.app.service('assets').create(asset).then((data) => {
        hook.data.asset = data
        return hook
      }).then(resolve).catch(reject)
    })
  }
}

const gameHooks = {
  before: {
    create:
    [ commonHooks.requireAuth(),
      commonHooks.embellishUser(),
      commonHooks.setCurrentDateHook('createdAt'),
      commonHooks.setCurrentDateHook('updatedAt')
    ],
    update: [ commonHooks.setCurrentDateHook('updatedAt') ],
    patch: [ commonHooks.setCurrentDateHook('updatedAt') ]
  }
}

const imageHooks = {
  before: {
    create: [
      commonHooks.requireAuth()
    ]
  },
  after: {
    create: [ prepareAssetEntry('gameimages', [ 'game', 'image' ]) ]
  }
}

const iconHooks = {
  before: {
    create: [
      commonHooks.requireAuth()
    ]
  },
  after: {
    create: [ prepareAssetEntry('gameicons', [ 'game', 'icon' ]) ]
  }
}

module.exports = {
  gameHooks,
  imageHooks,
  iconHooks
}
