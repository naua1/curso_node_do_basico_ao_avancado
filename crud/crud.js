const express = require("express");

const server = express();


//Sempre que receber um body em JSON, transforme ele em um objeto JavaScript acessível via req.body.
server.use(express.json());

let costumers = [

    {id:1, nome:"Google" ,site:"http://google.com.br"},
    {id:2, nome:"DevSamurai" ,site:"http://devsamurai.com.br"},
    {id:3, nome:"UOL" ,site:"http://uol.com.br"}
]

server.get("/costumers", (req,res) =>{

    return res.json(costumers)

});

server.get("/costumer/:id", (req,res)=>{
    //parseInt é necessário porque req.params.id é uma string.
        const id = parseInt(req.params.id);

    //Procura no array costumers um item com id igual ao id passado na URL.
    //Retorna o objeto correspondente se encontrar, ou undefined se não existir.
        const costumer =  costumers.find(item => item.id === id);
        
        //Ele verifica se a variável costumer tem algum valor (ou seja, se foi encontrada).
        //Se costumer existe, então status = 200 (OK).
        //Se não existe (undefined ou null), então status = 404 (Not Found).
        const status = costumer? 200: 404;
        
        //.json(costumer) → envia o costumer como JSON no corpo da resposta.
        return res.status(status).json(costumer);

});

server.post("/costumers", (req,res) =>{

        const {nome , site} = req.body;

        const id = costumers[costumers.length -1].id + 1;

        const newcostumers = {id,nome,site};

        costumers.push(newcostumers);

        return res.status(201).json(newcostumers);
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Servidor rodando!');
});