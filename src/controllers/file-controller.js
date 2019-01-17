"user strict";

const reposytory = require("../repositories/file-repositore");
const repositoryCustomer = require('../repositories/costumer-repositore')
const guid = require("guid");
const authService = require("../services/auth-service");
var fs = require('fs');

exports.listFiles = async (req, res, next) => {
  try {
    var data = await reposytory.get();
    res.status(200).send(data);
  } catch (error) {
    //console.log(error);
    res.status(500).send({
      message: "Erro ao processar sua requisição"
    });
  }
};

exports.getFile = async (req, res, next) => {
  try {
    var mFile = await reposytory.getById(req.params.id); 
    var extencao = await mFile.name.split(".");
    var filePath = await 'src/resources/'+mFile._id+'.'+extencao[1];
   // var file = fs.createWriteStream(filePath);
    res.status(200).download(filePath);
  } catch (error) {
    
    res.status(500).send({
      message: "Erro ao processar sua requisição"
    });
  }
}

exports.uploadFile = async (req, res) => {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  var arquivo = JSON.parse(req.body.arquivo);
  var file = await reposytory.create({
    title: arquivo.titulo,
    tipo: [arquivo.tipo],
    contexto: arquivo.contexto,
    name: req.files.sampleFile.name,
    complemento: arquivo.complemento,
  });
  
  var extencao = req.files.sampleFile.name.split(".");
  var filePath = await 'src/resources/'+file._id+'.'+extencao[1];
  let sampleFile = req.files.sampleFile;

  var user = await repositoryCustomer.getById(arquivo.idUser)
  if (user != null) {
     user.files.push(file);
     repositoryCustomer.update(arquivo.idUser, user) 
  }
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(filePath, function(err) {
    if (err){  
      filePath = null;
      return res.status(500).send(err);
    } 
     return res.send("Arquivo exrportado");
  });
  
}


exports.post = async (req, res, next) => {
  try {
    // recuperar token
    const token =
      req.body.token || req.body.token || req.headers["x-acces-token"];
    // Decodificar o token
    const data = await authService.decodeToken(token);

    await reposytory.create({
      customer: data.id,
      number: guid.raw().substring(0, 6),
      items: req.body.items
    });
    res.status(201).send({ message: "Order cadastado com sucesso!" });
  } catch (error) {
    console.log(error)
    res.status(500).send({
      message: "Erro ao processar sua requisição"
    });
  }
};
