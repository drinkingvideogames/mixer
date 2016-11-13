function setFieldHook (field, func) {
  return (hook) => {
    hook.data[field] = func(hook)
  }
}

function setCurrentDateHook (field) {
  return setFieldHook(field, () => { return new Date().getTime() })
}

module.exports = {
  setFieldHook,
  setCurrentDateHook
}