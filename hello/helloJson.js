const express = require('express');

const server = express();

server.get("/hello", (req, res) => {
    return res.json({
        title: "hello world",
        message: "ola meu amigo, tudo bem!?"
    });

});


server.listen(3000)