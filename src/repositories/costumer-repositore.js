"user strict";

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.get = async () => {
  const res = await Customer.find();
  return res;
};

exports.getById = async (id) => {
  const res = await Customer.findById(id);
  return res;
};

exports.getUsers = async () => {
  const res = await Customer.find({roles: 'user'}, 'name');
  return res;
}

exports.autenticate = async(data) => { 
  const res = await Customer.findOne({
    email: data.email,
     password: data.password});
     return res;
};

exports.create = async(data) => {
  var customer = new Customer(data);
  await customer.save();
};

exports.update = async(id, data) => {
   await Customer.findByIdAndUpdate(id, data);
}

exports.getFiles = async(id) => {
  const res = await Customer.findById(id, 'title')
  .populate('files', 'title name createDate tipo complemento');
  return res;
}
