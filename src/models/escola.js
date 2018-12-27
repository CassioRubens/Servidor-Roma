"user strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  endereco:{
    type: ObjectId
  },
  turmas:[
    {
      nome: {
        type: String
      }
    }
  ],
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
