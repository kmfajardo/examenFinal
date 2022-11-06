/**
 * There are 3 routes with corresponding controller methods:
POST /upload: upload()
GET /files: getListFiles()
GET /files/[fileName]: download()
 */

const express = require("express");
const router = express.Router();

const { authJwt } = require("../middlewares");
const controller = require("../controllers/file.controller");

module.exports = function(app) {
  
  app.post("/api/upload", [authJwt.verifyToken, authJwt.isAdmin], [controller.upload]);

  app.get("/api/files", [authJwt.verifyToken, authJwt.isAdmin], [controller.getListFiles]);

  app.put("/api/files/:name", [authJwt.verifyToken, authJwt.isAdmin], [controller.download]);
  
};