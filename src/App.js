//o app já configura o servirdo para ser usado


const express = require("express");
const routes = require("./routes")

class App{

/*
O construtor da classe App é executado quando um novo objeto da classe é criado.

this.server = express(); cria o servidor.

this.middleware(); configura os middlewares (funções que tratam as requisições antes de chegar nas rotas).

this.routes(); define as rotas da aplicação.
 */
constructor(){
    this.server = express();
    this.middleware();
    this.routes();
}

middleware(){

    this.server.use(express.json());
}
routes(){
    this.server.use(routes);
}
}

module.exports = new App().server;

