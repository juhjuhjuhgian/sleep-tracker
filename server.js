const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const sleepRoutes = require('./routes/sleep')

require('dotenv').config({path: './config/.env'}) //" hey server, know how to use this env file and here's where it is"

connectDB() //the requiring at the top exports it to this file, but this line calls the funtion

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))// this line and line below replace body parser
app.use(express.json())

app.use('/', homeRoutes)
app.use('/sleep', sleepRoutes)
 
app.listen(process.env.PORT, ()=>{ //.env is for deployment purposes, nice to not have a port harded coded becuase hosting site might not want to use
    console.log('Server is running, you better catch it!')
})    