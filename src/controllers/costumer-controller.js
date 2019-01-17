"user strict";

const reposytory = require("../repositories/costumer-repositore");
const md5 = require("md5");
const authService = require("../services/auth-service");

exports.listCustomers = async (req, res, next) => {
  try {
    var data = await reposytory.get();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: "Erro ao processar sua requisição"
    });
  }
};

exports.listUsers = async (req, res, next) => {
  try {
    var data = await reposytory.getUsers();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: "Erro ao processar sua requisição"
    });
  }
};

exports.listGerentes = async (req, res, next) => {
  try {
    var data = await reposytory.getGerentes();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: "Erro ao processar sua requisição"
    });
  }
};


exports.listFuncionarios = async (req, res, next) => {
  try {
    var data = await reposytory.getFuncionarios(req.params.id);
    res.status(200).send(data.users);
  } catch (error) {
    res.status(500).send({
      message: "Erro ao processar sua requisição"
    });
  }
};

exports.postUsuarioComum = async (req, res, next) => {
  //console.log("Teste");
  
  try {
    const customer = await reposytory.create({
      name: req.body.name,
      email: req.body.email,
      cpf: req.body.cpf,
      regime_de_bens: req.body.regime_de_bens,
      numero_pis: req.body.numero_pis,
      nacionalidade: req.body.nacionalidade,
      mae: req.body.mae,
      pai: req.body.pai,
      data_nascimento: req.body.data_nascimento,
      local_nascimento: req.body.local_nascimento,
      estado_civil: req.body.estado_civil,
      sexo: req.body.sexo,
      funcao: req.body.funcao,
      salario: req.body.salario,
      variaveis_salario: req.body.variaveis_salario,
      complemento_trabalhador: req.body.complemento_trabalhador,
      identificacao: req.body.identificacao,
      contato: req.body.contato,
      escolaridade: req.body.escolaridade,
      dependente: req.body.dependente,
      dependentes: req.body.dependentes,
      password: md5(req.body.password + global.SALT_KEY),
      roles: ["user"]
    });
    var gestor = await reposytory.getById(req.params.id);
    gestor.users.push(customer._id);
    await reposytory.update(req.params.id, gestor);
    res.status(201).send({ message: "Costumer cadastado com sucesso!" });
  } catch (error) {

    res.status(500).send({
      message: "Erro ao processar sua requisição"
    });
  }
};

exports.postClient = async (req, res, next) => {
  try {
    await reposytory.create({
      name: req.body.name,
      email: req.body.email,
      cnpj: req.body.cnpj,
      contato: req.body.contato,
      password: md5(req.body.password + global.SALT_KEY),
      roles: ["gerente"]
    });
    res.status(201).send({ message: "Costumer cadastado com sucesso!" });
  } catch (error) {
    res.status(500).send({
      message: "Erro ao processar sua requisição"
    });
  }
};

exports.postAdm = async (req, res, next) => {
  try {
    await reposytory.create({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password + global.SALT_KEY),
      roles: ["admin"]
    });
    res.status(201).send({ message: "Costumer cadastado com sucesso!" });
  } catch (error) {
    res.status(500).send({
      message: "Erro ao processar sua requisição"
    });
  }
};

exports.autenticate = async (req, res, next) => {
  try {
    const customer = await reposytory.autenticate({
      email: req.body.email,
      password: md5(req.body.password + global.SALT_KEY)
    });

    if (!customer) {
      res.status(203).send({
        message: "Usuario ou senha invalidos"
      });
    } else {

    const token = await authService.generateToken({
      id: customer._id,
      email: customer.email,
      name: customer.name
    });
    res.status(200).send({
      token: token,
      data: {
        id: customer._id,
        email: customer.email,
        name: customer.name,
        role: customer.roles[0]
      }
    });}
  } catch (error) {
    res.status(500).send({
      message: "Erro ao processar sua requisição"
    });
  }
};

exports.listFilers = async (req, res, next) => {
  try {
    var data = await reposytory.getFiles(req.params.id);
    res.status(200).send(data.files);
  } catch (error) {
    res.status(500).send({
      message: "Erro ao processar sua requisição"
    });
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    var data = await reposytory.getById(req.params.id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: "Erro ao processar sua requisição"
    });
  }
};
