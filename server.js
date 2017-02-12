var express = require('express')

var app = express()
var port = process.env.PORT || 3000

app.set('view engine', 'pug')

app.use(express.static('public'))


app.get('/', function (req, res) {
  res.send('hi')
})

app.listen(3000, function (err) {
  if (err) return console.log('tenemos un Error!!!'), process.exit(1);
  console.log('Prodigius escuchando en el puerto 3000!!')
})
