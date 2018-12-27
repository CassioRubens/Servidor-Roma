"user strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  rg: {
    type: String
  },
  cpf: {
    type: String,
  },
  password: {
    type: String,
    required: true
  },
  endereco:{
    type: Object
  },
  escola: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Escola"
  },
  roles: [
    {
      type: String,
      required: true,
      enum: ["user", "admin", "gestor"],
      defealt: "user"
    }
  ]
});

module.exports = mongoose.model("Customer", schema);
