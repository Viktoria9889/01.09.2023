const express = require('express')
const ejs = require('ejs')
const server  = express()
const cors = require('cors')

const mainRouter = require('./routes/mainRouter')


server.set('view engine','ejs')
server.set('views', __dirname + '/views')
//server.use(express.static(__dirname + '/public'))

server.use(cors({
    origin: '*',
    methods: ['GET','POST']
}))


server.use(express.json())
server.use(express.urlencoded({extended: false}))

server.use('/', mainRouter)

server.listen(4000)