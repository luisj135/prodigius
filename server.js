var express = require('express')

var app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('index', {'title': 'Prodigius DeMO'})
})

app.listen(3000, function (err) {
  if (err) {
    process.exit(1)
    return console.log('tenemos un Error!!!')
  }
  console.log('Prodigius escuchando en el puerto 3000!!')
})
