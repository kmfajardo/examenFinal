const { authJwt } = require("../middlewares");
const controller = require("../controllers/mathcs.controller");

module.exports = function(app) {
  
  app.post("/api/math/initialV", [authJwt.verifyToken, authJwt.isAdmin], [controller.doMaths]);
  
};