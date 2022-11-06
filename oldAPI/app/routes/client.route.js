const { authJwt } = require("../middlewares");
const controller = require("../controllers/client.controller");

module.exports = function(app) {
  
  app.get("/api/client/all", [authJwt.verifyToken, authJwt.isAdmin], [controller.getClients]);

  app.get("/api/client/:id", [authJwt.verifyToken, authJwt.isAdmin], [controller.getClientsById]);

  app.put("/api/client/:id", [authJwt.verifyToken, authJwt.isAdmin], [controller.updateClient]);

  app.delete("/api/client/:id", [authJwt.verifyToken, authJwt.isAdmin], [controller.deleteClient]);

  app.delete("/api/client/all", [authJwt.verifyToken, authJwt.isAdmin], [controller.deleteAllClients]);
  
};