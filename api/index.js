const express = require('express')
const config = require('../config')
const tasks = require('./components/tasks/network')
const errors = require('../network/errors')

const app = express()
app.use(express.json())

app.use('/api/tasks', tasks)
app.use(errors)

module.exports = app