const { Router} = require("express");

const routes = new Router();

const customers = require("./app/controllers/costumersController");


routes.get("/", customers.index);
routes.get("/customer/:id", customers.show);
routes.post("/customer", customers.create);
routes.put("/customer/:id", customers.update);
routes.delete("/customer/:id", customers.destroy);

module.exports =  routes;