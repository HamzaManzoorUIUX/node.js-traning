const express=require('express')
const routes=express.Router()

routes.get('/',(req,res)=>{
    res.send('auth'+"2+2")
})

module.exports = routes;