"user strict";

const reposytory = require("../repositories/order-repositore");
const guid = require("guid");
const authService = require("../services/auth-service");

exports.listOrders = async (req, res, next) => {
  try {
    var data = await reposytory.get();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Erro ao processar sua requisição"
    });
  }
};

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
