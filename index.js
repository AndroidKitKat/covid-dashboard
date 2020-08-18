const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

const port = 26843

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    console.log(`get from ${req.ip}`)
    res.render('index')
})

app.get('/*', (req, res) => {
    console.log(`tried to access ${req.path}`)
    res.redirect('/')
})

app.listen(port, () => {})