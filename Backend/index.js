const express = require('express')
const cors = require('cors')
const configureDB = require('./config/database')
const route = require('./config/Route')

const app = express()
const port = 3020

app.use(cors())
app.use(express.json())

app.listen(port,(req,res)=>{
    console.log(`Welcome to the port ${port}`)
})
configureDB()
app.use(route)