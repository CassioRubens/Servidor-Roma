"user strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  cpf: {
    type: String
  },
  numero_pis: {
    type: String
  },
  mae: {
    type: String
  },
  pai: {
    type: String
  },
  data_nascimento: {
    type: Date
  },
  local_nascimento: {
    type: String
  },
  estado_civil: {
    type: Number
  },
  sexo: {
    type: String,
    enum: ["Masculino", "Feminino"],
  },
  funcao: {
    type: String
  },
  salario: {
    type: String
  },
  variaveis_salario: {
    type: String
  },

  complemento_trabalhador: {
    residente_exterior: {
      type:Number
    },
    endereco: {
      type: String
    },
    numero: {
      type:String
    },
    bairro: {
      type: String
    },
    complemento: {
      type: String
    },
    cidade: {
      type: String
    },
    cep: {
      type: String
    },
    pais: {
      type:String
    },
    residencia_propria: {
      type: Number
    }

  },
  
  identificacao: {
    num_ctps: {
      type: String
    },
    serie_ctps:{
      type: String
    },
    unidade_ctps: {
      type: String
    },
    rg: {
      type: String 
    },
    data_expedicao:{
      type: String
    },
    orgao_emissor: {
      type:String
    },
    data_validade: {
      type: Date
    }
  },

  contato: {
    telefone_fixo: {
      type: String
    },
    celular: {
      type: String
    },
    email_institucional: {
      type: String
    }    
  },

  escolaridade: {
    type: Number
  },

  deficiencia: {
    tipo: {
      type: String
    },
    reabilidato: {
      type: Number
    },
    observacoes: {
      type: String
    }
  },

  dependente: {
    tipo1: {
      type: Number
    },
    tipo2: {
      type: Number
    },
    tipo3: {
      type: Number
    },
    tipo4: {
      type: Number
    },
    tipo5: {
      type: Number
    },
    tipo6: {
      type: Number
    },
    tipo7: {
      type: Number
    },
    tipo8: {
      type: Number
    },
    tipo9: {
      type: Number
    },
    tipo10: {
      type: Number
    },
    irrf:{
      type: Number
    },
    salario_familia: {
      type: Number
    }
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  dependentes: [
    {
      nome: {
        type: String
      },
      cpf: {
        type: String
      }
    }
  ],
  roles: [
    {
      type: String,
      required: true,
      enum: ["user", "admin", 'gerente'],
      defealt: "user"
    }
  ],

  files: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "File"
    }
  ]
});

module.exports = mongoose.model("Customer", schema);
