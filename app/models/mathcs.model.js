const mongoose = require("mongoose");

const Mathcs = mongoose.model(
  "Mathcs",
  new mongoose.Schema({
    vInicial: Double,
    vFinal: Double,
    vAceleracion: Double,
    tiempo: Double,
  })
);

module.exports = Mathcs;