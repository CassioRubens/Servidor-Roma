"user strict";

const mongoose = require("mongoose");
const File = mongoose.model("File");

exports.get = async () => {
  const res = await File.find({});
  return res;
};

exports.getById = async (id) => {
  const res = await File.findById(id);
  return res;
};

exports.create = async data => {
  var file = new File(data);
  await file.save();
  return file;
};
