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

app.listen(port, () => {
    console.log(port)
})