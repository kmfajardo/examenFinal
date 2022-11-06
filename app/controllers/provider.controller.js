const Provider = require('../models/provider.model');

const providers = {

    // GET get all Providers
    getProviders: function(req, res) {
        Provider.find({}).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error occurred while retrieving providers."
            });
        })
    },
    // GET Provider by id
    getProvidersById: function(req, res) {
        const id = req.params.id;
        Provider.findById(id).then(data => {
            if (!data)
                res.status(404).send({
                    message: "Provider with id " + id + " is not found."
                });
            else res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error occured while retrieving Provider with id " + id
            })
        })
    },
    // PUT update Provider by id
    updateProvider: function(req, res) {
        if (!req.body) {
            return res.status(400).send({
                message: "Data to update can not be empty!"
            });
        }

        const id = req.params.id;

        Provider.findByIdAndUpdate(id, req.body, {
                useFindAndModify: false
            })
            .then(data => {
                if (!data) {
                    res.status(404).send({
                        message: `Failed to update Provider with id=${id}.`
                    });
                } else res.send({
                    message: "Provider was updated successfully."
                });
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error occured while updating Provider with id=" + id
                });
            });
    },
    // DELETE delete Provider by id
    deleteProvider: function(req, res) {
        const id = req.params.id;

        Provider.deleteOne({
                _id: id
            })
            .then(data => {
                if (!data) {
                    res.status(404).send({
                        message: `Failed to delete Provider with id=${id}.`
                    });
                } else res.send({
                    message: "Provider was deleted successfully."
                });
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error occured while deleting Provider with id=" + id
                });
            });
    },
    // DELETE remove all Providers
    deleteAllProviders: function(req, res) {
        Provider.deleteMany({})
            .then(data => {
                res.send({
                    message: "All Providers was deleted successfully."
                });
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error occured while deleting all Providers"
                });
            });
    }
}

module.exports = providers;