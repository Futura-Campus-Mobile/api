const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

admin.initializeApp()

const app = express() 

app.use(bodyParser.json())
app.use(cors({ origin: true }))

app.use('/users', require('./routes/users'))

exports.api = functions.https.onRequest(app)