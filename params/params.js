const express = require('express');

const server = express();

server.get("/hello", (req, res) =>{

    //http://localhost:3000/hello?nome=joao&idade=21
    //query params = ?nome=joao&idade=21

    ///pega parametros na url
    const {nome, idade } = req.query;

    return res.json({

        title: "cliente",
        nome: nome,
        idade: `ele tem ${idade} anos`

    });
});

 server.get("/hello/:nome", (req, res) =>{

        // http://localhost:3000/hello/:jaoa
        // Route params = /hello/nome

       //pega o parametos de rota
        const nome = req.params.nome;

        return res.json({
            title: "cliente",
            nome: nome,
        });
        
        
    });


server.listen(5500);