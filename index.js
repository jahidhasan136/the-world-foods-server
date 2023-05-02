const express = require("express");
const cors = require('cors')
const app = express()
const port = process.env.port || 5000


const chefInformation = require('./chef.json')


app.use(cors())

app.get('/', (req, res) => {
    res.send('Express running')
})

app.get('/chef', (req, res)=> {
    res.send(chefInformation)
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id
    const chefRacipe = chefInformation.find(racipe => racipe.id == id)
    res.send(chefRacipe)
})

app.listen(port, () => {
    console.log(port)
})