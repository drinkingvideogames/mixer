function setFieldHook (field, func) {
  return (hook) => {
    hook.data[field] = func(hook)
    return Promise.resolve(hook)
  }
}

function setCurrentDateHook (field) {
  return setFieldHook(field, () => { return new Date().getTime() })
}

function requireAuth () {
  return (hook) => {
    if (hook.params.authenticated) return Promise.resolve(hook)
    return Promise.reject(new Error(`${hook.path} ${hook.method} requires authentication`))
  }
}

function embellishUser (fieldName) {
  fieldName = fieldName || 'userId'
  return (hook) => {
    hook.data[fieldName] = hook.params.user._id
    return Promise.resolve(hook)
  }
}

module.exports = {
  setFieldHook,
  setCurrentDateHook,
  requireAuth,
  embellishUser
}
