var page = require('page')
var template = require('./template')

page('/', function (ctx, next) {
  var main = document.getElementById('main-controller')
  main.appendChild(template)
})
