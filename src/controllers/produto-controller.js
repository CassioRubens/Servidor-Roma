"user strict";

const reposytory = require("../repositories/product-repositore");

exports.get = async (req, res, next) => {
  try {
    var data = await reposytory.get();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: "Erro ao processar sua requisição"
    });
  }
};

exports.getBySlug = async (req, res, next) => {
  try {
    var data = await reposytory.getBySlug(req.params.slug);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: "Erro ao processar sua requisição"
    });
  }
};

exports.getByTag = async (req, res, next) => {
  try {
    var data = await reposytory.getByTag(req.params.tag);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: "Erro ao processar sua requisição"
    });
  }
};

exports.getById = async (req, res, next) => {
  try {
    var data = await reposytory.getById(req.params.id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: "Erro ao processar sua requisição"
    });
  }
};

exports.post = async (req, res, next) => {
  try {
    await reposytory.create(req.body);
    res.status(201).send({ message: "Produto cadastado com sucesso!" });
  } catch (error) {
    res.status(500).send({
      message: "Erro ao processar sua requisição"
    });
  }
};

exports.put = async (req, res, next) => {
  try {
    await reposytory.update(req.params.id, req.body);
    res.status(200).send({ message: "Produto cadastado com sucesso!" });
  } catch (error) {
    res.status(500).send({
      message: "Erro ao processar sua requisição"
    });
  }
};

exports.delete = async (req, res, next) => {
  try {
    await reposytory.delete(req.params.id);
    res.status(200).send({ message: "Produto removido com sucesso!" });
  } catch (error) {
    res.status(500).send({
      message: "Erro ao processar sua requisição"
    });
  }
};
