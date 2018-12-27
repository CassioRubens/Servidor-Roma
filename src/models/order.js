"user strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  number: {
    type: String,
    required: false
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
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer"
  },
  items: [
    {
      quantity: {
        type: Number,
        required: true,
        defealt: 1
      },
      price: {
        type: Number,
        require: true
      },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      }
    }
  ]
});

module.exports = mongoose.model("Order", schema);
