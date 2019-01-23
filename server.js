const express = require('express');
const app = express()

const port = process.env.PORT || 8080

app.get('/:user',(req,res)=>{
    const jsonSent = {status:'ok' ,nombre: req.params.user}
    res.json(jsonSent)    
})

app.get('/*',(req,res)=>{
    const jsonSent = {status:'error' ,nombre: null}
    res.status(404)
    res.json(jsonSent)
})

app.listen(port)