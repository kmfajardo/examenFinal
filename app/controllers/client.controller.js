const Client = require('../models/client.model');

const clients = {

    // GET get all Clients
    getClients: function(req, res) {
        Client.find({}).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error occurred while retrieving clients."
            });
        })
    },
    // GET Client by id
    getClientsById: function(req, res) {
        const id = req.params.id;
        Client.findById(id).then(data => {
            if (!data)
                res.status(404).send({
                    message: "Client with id " + id + " is not found."
                });
            else res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error occured while retrieving Client with id " + id
            })
        })
    },
    // PUT update Client by id
    updateClient: function(req, res) {
        if (!req.body) {
            return res.status(400).send({
                message: "Data to update can not be empty!"
            });
        }

        const id = req.params.id;

        Client.findByIdAndUpdate(id, req.body, {
                useFindAndModify: false
            })
            .then(data => {
                if (!data) {
                    res.status(404).send({
                        message: `Failed to update Client with id=${id}.`
                    });
                } else res.send({
                    message: "Client was updated successfully."
                });
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error occured while updating Client with id=" + id
                });
            });
    },
    // DELETE delete Client by id
    deleteClient: function(req, res) {
        const id = req.params.id;

        Client.deleteOne({
                _id: id
            })
            .then(data => {
                if (!data) {
                    res.status(404).send({
                        message: `Failed to delete Client with id=${id}.`
                    });
                } else res.send({
                    message: "Client was deleted successfully."
                });
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error occured while deleting Client with id=" + id
                });
            });
    },
    // DELETE remove all Clients
    deleteAllClients: function(req, res) {
        Client.deleteMany({})
            .then(data => {
                res.send({
                    message: "All Clients was deleted successfully."
                });
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error occured while deleting all Clients"
                });
            });
    }
}

module.exports = clients;