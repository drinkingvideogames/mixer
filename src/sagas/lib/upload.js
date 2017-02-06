export default function upload (service, file) {
  function getBlob (file) {
    return new Promise((resolve, reject) => {
      const xhr = new window.XMLHttpRequest()
      xhr.open('GET', file.preview, true)
      xhr.responseType = 'blob'
      xhr.onload = function (e) {
        if (this.status === 200) {
          var myBlob = this.response
          return resolve(myBlob)
        } else {
          return reject()
        }
      }
      xhr.send()
    })
  }

  function getDataUri (blob) {
    return new Promise((resolve, reject) => {
      const reader = new window.FileReader()
      reader.onload = () => resolve(reader.result)
      reader.readAsDataURL(blob)
    })
  }

  return new Promise((resolve, reject) => {
    getBlob(file)
      .then(getDataUri)
      .then((data) => {
        service
          .create({ uri: data })
          .then(resolve)
          .catch(reject)
      })
  })
}
