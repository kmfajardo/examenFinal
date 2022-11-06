const Mathcs = require('../models/mathcs.model');

const mathcs = {
    
    doMaths: function (req, res) {

        const mathcs = new Mathcs({
            vFinal: req.body.vFinal,
            vAceleracion: req.body.vAceleracion,
            tiempo: req.body.tiempo
        });

        var velFinal = parseFloat(req.body.vFinal);
        var aceleracion = parseFloat(req.body.vAceleracion);
        var tiempos = parseFloat(req.body.tiempo);

        var velInicial = velFinal - (aceleracion * tiempos);

        mathcs.save((err) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            res.send({ message: "El resultado de la Velocidad Inicial es: " + velInicial });
        });
    }

}

module.exports = mathcs;