   let costumers = [

    {id:1, nome:"Google" ,site:"http://google.com.br"},
    {id:2, nome:"DevSamurai" ,site:"http://devsamurai.com.br"},
    {id:3, nome:"UOL" ,site:"http://uol.com.br"}
       ];


class costumersController{
 

    index(req, res){
            return res.json(costumers)
    }

    show(req,res){
         //parseInt é necessário porque req.params.id é uma string.
        const id = parseInt(req.params.id);

    //Procura no array costumers um item com id igual ao id passado na URL.
    //Retorna o objeto correspondente se encontrar, ou undefined se não existir.
        const costumer =  costumers.find(item => item.id === id);
        
        //Ele verifica se a variável costumer tem algum valor (ou seja, se foi encontrada).
        //Se costumer existe, então status = 200 (OK).
        //Se não existe (undefined ou null), então status = 404 (Not Found).
        const status = costumer? 200: 404;
          console.log("GET :: /costumer/:id", costumer);
          
        //.json(costumer) → envia o costumer como JSON no corpo da resposta.
        return res.status(status).json(costumer);
    }

    create(req,res){
        // 1. Extrai os campos nome e site do corpo da requisição
        const {nome , site} = req.body;
        // 2. Cria um novo ID baseado no último ID do array
        const id = costumers[this.costumers.length -1].id + 1;
        // 3. Cria o novo cliente com os dados recebidos + ID 
        const newcostumers = {id,nome,site};
        //  4. Adiciona o novo cliente ao array
        costumers.push(newcostumers);
         // 5. Retorna o cliente criado com status 201 Created
        return res.status(201).json(newcostumers);
    }

    update(req,res){
        	//pega o id do parametro e transforma em int
	const id = parseInt(req.params.id);
	
	//pegar o nome e site do corpo da requisicao
	const {nome, site} = req.body;
	
	//pega o index do costumer dentro do array
	const index = costumers.findIndex(item => item.id === id);
	
	//se o index for maio ou iqual a zero ele returno um status de 200
	const status = index >=0? 200:404;

	if(index >= 0){
	// atualiza o costumer com as novas informacoes
	costumers[index] = {id,nome, site};
	
	return res.status(status).json(this.costumers[index]);
    }

}
 destroy(req,res){
          const id = parseInt(req.params.id);
        const index = costumers.findIndex(item => item.id == id);


        const status = index >=0? 200:404;
        
        if(index >=0){

    //splice apagar o que tiver no index, o numero e quantos itens vao ser apagados
        costumers.splice(index, 1);

        }

        
        return res.status(status).json();

        
    }
}


module.exports = new costumersController();