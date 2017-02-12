var express = require('express')

var app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))


app.get('/', function (req, res) {
  res.render('index', {'title': 'Prodigius DeMO'})
})

app.listen(3000, function (err) {
  if (err) return console.log('tenemos un Error!!!'), process.exit(1);
  console.log('Prodigius escuchando en el puerto 3000!!')
})
