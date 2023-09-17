const express = require('express')
const app = express();
const route = require('./routes/route')
const path = require('path')
const bodyParser = require('body-parser')

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'views', 'scripts')))
app.use(express.static(path.join(__dirname, 'node_modules', 'jQuery')))
app.use('/', route)

app.listen(3000)
