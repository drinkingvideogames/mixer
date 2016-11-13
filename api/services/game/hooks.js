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

const before = {
  create:
    [ commonHooks.setCurrentDateHook('createdAt'),
      commonHooks.setCurrentDateHook('updatedAt')
    ],
  update: [ commonHooks.setCurrentDateHook('updatedAt') ],
  patch: [ commonHooks.setCurrentDateHook('updatedAt') ]
}

const imagesAfter = {
  create: [ prepareAssetEntry('gameimages', [ 'game', 'image' ]) ]
}

const iconsAfter = {
  create: [ prepareAssetEntry('gameicons', [ 'game', 'icon' ]) ]
}

module.exports = {
  gameHooks: { before },
  imageHooks: { after: imagesAfter },
  iconHooks: { after: iconsAfter }
}
