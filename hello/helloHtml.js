const express = require('express');

//criando o server

const server = express();

server.get("/hello", (req, res) =>{
    return res.send("<h1>hello world</h1>")
})

server.listen(3000);