require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/router')
require('./db/connection')

const pfServer = express()

pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)
pfServer.use('/uploads',express.static('./uploads'))

const PORT = 3000 || process.env.PORT

pfServer.listen(PORT, () => {     
    console.log(`Project Fair Server started at port : ${PORT}`);
     })

     pfServer.get('/',(req,res)=>{
          res.status(200).send(`<h1 style='color:red;'>Project Fair Server started,and running at port 3000!!!...</h1>`)
     })