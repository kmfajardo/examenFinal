const mongoose = require("mongoose");

const Provider = mongoose.model(
  "Provider",
  new mongoose.Schema({
    fullname: String,
    email: String,
    phone: String,
    address: String,
  })
);

module.exports = Provider;