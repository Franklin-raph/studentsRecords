const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const { connectionMethod } = require('./config/db')
const cors = require('cors')
// const studentRoutes = requ

const app = express()

// middle wares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use('/api/v1/student', require('./routes/studentRoutes'))

app.get('/', (req, res) => {
    res.send('Hello')
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    connectionMethod()
    console.log("App is running on port " + PORT)
})