//importar pacote express
const express = require("express");
const path = require("path");
//iniciando o express, biblioteca
const server = express();

const pages = require("./pages.js");

server
  //utilizar o bory do resquest
  .use(express.urlencoded({ extended: true }))
  //utilizando os arquivos estaticos
  .use(express.static("public")) //assim o express cria todas as rotas necessarias
  //configurar template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")
  // criar uma rota
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanage", pages.saveOrphanage);

/*
  .get("/", (request, response) => {
    // ('/rota', request= pega tudo que vc escrever depois / no navegador e transforma em um objeto,
    //  response= resposta do servidor)
    //console.log("oi");
    // return response.send("oi direto do back-end"); // escrever na tela
    //console.log(__dirname);//mostra o caminho onde estou
    // console.log(path.join(__dirname, "views", "index.html");//criando caminhos seguro pela bibliote path, ela cria um caminho ideial
    //return response.sendFile(path.join(__dirname, "views", "index.html"));
    const city = request.query.city;

    return response.render("index", { city });
  });
  */

//ligar o servidor
server.listen(5500);
