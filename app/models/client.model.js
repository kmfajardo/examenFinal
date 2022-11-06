const mongoose = require("mongoose");

const Client = mongoose.model(
  "Client",
  new mongoose.Schema({
    fullname: String,
    email: String,
    address: String,
  })
);

module.exports = Client;