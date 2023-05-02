const express = require("express");
const cors = require('cors')
const app = express()
const port = process.env.port || 5000


const chefInformation = require('./data/chef.json')
const racipe = require('./data/recipes.json')


app.use(cors())

app.get('/', (req, res) => {
    res.send('Express running')
})

app.get('/chef', (req, res)=> {
    res.send(chefInformation)
})

app.get('/racipe', (req, res) => {
    res.send(racipe)
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id
    const chefRacipe = chefInformation.find(racipe => racipe.id == id)
    res.send(chefRacipe)
})

app.get('/racipe/:id', (req, res) => {
    const id = req.params.id
    const racipeItems = racipe.filter(item => item.id === id)
    res.send(racipeItems)
})

app.listen(port, () => {
    console.log(port)
})