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
      title: {
          type: String,
          required: true
      },
      name: {
        type: String
      }
});

module.exports = mongoose.model("File", schema);