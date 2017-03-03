var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('root')
})

app.get('/about', function (req, res) {
  res.send('about')
})

app.get('/random.text', function (req, res) {
  res.send('random.text')
})

app.get('/ab?cd', function (req, res) {
  res.send('ab?cd')
})

app.get('/ab+cd', function (req, res) {
  res.send('ab+cd')
})

app.get('/ab*cd', function (req, res) {
  res.send('ab*cd')
})

app.get('/ab(cd)?e', function (req, res) {
  res.send('ab(cd)?e')
})

app.get(/a/, function (req, res) {
  res.send('/a/')
})

app.get(/.*fly$/, function (req, res) {
  res.send('/.*fly$/')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

