module.exports = function (content) {
  this.cacheable()
  var isProduction = this.minimize || process.env.NODE_ENV === 'production'
  var hash = require('hash-sum')
  var cache = Object.create(null)

  function genId (file) {
    return cache[file] || (cache[file] = hash(file))
  }

  if (!isProduction) {
    var filePath = this.resourcePath
    var moduleId = genId(filePath)
    var regex = new RegExp(/(\S+) = __decorate\(\[\s+Component/gi)
    var matches = regex.exec(content)
    if (matches !== null) {
      content += `
        /* hot reload */
        ${matches[1]}.options.__file = '${filePath}'
        if (module.hot) {(function () {
          var hotApi = require('vue-hot-reload-api')
          hotApi.install(require('vue'), false)
          if (!hotApi.compatible) return
          module.hot.accept()
          if (!module.hot.data) {
            console.log('data defined')
            hotApi.createRecord('${moduleId}', ${matches[1]})
          } else {
            console.log('data already')
            hotApi.reload('${moduleId}', ${matches[1]})
          }
        })()}
      `
    }
  }
  return content
}