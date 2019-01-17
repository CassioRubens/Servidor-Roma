"user strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  number: {
    type: String,
    required: false
  },
  contexto: {
    type: String
  },
  createDate: {
    type: Date,
    required: false,
    default: Date.now
  },
  status: {
    type: String,
    required: false,
    enum: ["created", "done"],
    default: "created"
  },
  title: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  complemento: {
    type: String
  },
  via: {
    type: Boolean,
  },
  tipo: {
    type: String,
    enum: [
      "FOLHA",
      "CADASTRO DE FUNCIONÁRIO",
      "FÉRIAS",
      "RESCISÃO",
      "AFASTAMENTO",
      "DÉCIMO TERCEIRO",
      "NOTAS FISCAIS",
      "ARQUIVOS MAGNÉTICOS",
      "ICMS e IPI",
      "FEDERL",
      "MUNICIPAL",
      "ESCRITA CONTÁBIL",
      'CLIENTE'
    ]
  }
});

module.exports = mongoose.model("File", schema);
