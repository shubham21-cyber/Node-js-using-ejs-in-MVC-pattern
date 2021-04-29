const express = require('express')
const path =require('path')
const Router = require('./routes/routes')
const app = express()


app.use(express.static(path.join(__dirname,'public')))

app.use(Router)

// EJS Templating Engine
app.set('view engine','ejs')
app.set('views','views')

app.listen('3000',()=>{
    console.log("Server Started ...")
    })