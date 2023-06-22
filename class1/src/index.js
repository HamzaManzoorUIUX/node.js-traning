const express=require('express')
const app=express()
const routes=require('./routes')
app.get('/',(req,res)=>{
    res.send("Hello Hamza Manzoor");
})
app.use(routes)
const PORT=process.env.PORT||8000
app.listen(PORT,()=>{
    console.log("server running on port "+PORT);
})