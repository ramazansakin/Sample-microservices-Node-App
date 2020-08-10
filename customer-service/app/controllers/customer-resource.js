const Customer = require('../models/customer.js');

// create new customer
exports.create = (req, res) => {
    // Request details null check
    if (!req.body.username || !req.body.phone || !req.body.orderId ) {
        return res.status(400).send({
            message: "Customer username, phone and orderId can not be empty."
        });
    }

    // wrap the req as new customer
    const customer = new Customer({
        username: req.body.username,
        email: req.body.email || "Default email",
        phone: req.body.phone,
        orderId: req.body.orderId
    });

    // Save the customer to db
    customer.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the customer."
            });
        });
};

// return all customers from the db.
exports.findAll = (req, res) => {
    Customer.find()
        .then(customers => {
            res.send(customers);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving customers."
            });
        });
};

// Find a single customer with an id
exports.findOne = (req, res) => {
    Customer.findById(req.params.id)
        .then(customer => {
            if (!customer) {
                return res.status(404).send({
                    message: "customer not found with id " + req.params.id
                });
            }
            res.send(customer);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "customer not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving customer with id " + req.params.id
            });
        });
};

// Update a customer identified by the id in the request
exports.update = (req, res) => {
    // Request details null check
    if (!req.body.username || !req.body.phone || !req.body.orderId ) {
        return res.status(400).send({
            message: "Customer username, phone and orderId can not be empty."
        });
    }

    // Find customer and update it with the request body
    Customer.findByIdAndUpdate(req.params.id, {
            username: req.body.username,
            email: req.body.email || "Default email",
            phone: req.body.phone,
            orderId: req.body.orderId
        }, {
            new: true
        })
        .then(customer => {
            if (!customer) {
                return res.status(404).send({
                    message: "customer not found with id " + req.params.id
                });
            }
            res.send(customer);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "customer not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error updating customer with id " + req.params.id
            });
        });
};

// Delete a customer with the specified id in the request
exports.delete = (req, res) => {
    Customer.findByIdAndRemove(req.params.id)
        .then(customer => {
            if (!customer) {
                return res.status(404).send({
                    message: "customer not found with id " + req.params.id
                });
            }
            res.send({
                message: "customer deleted successfully!"
            });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "customer not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Could not delete customer with id " + req.params.id
            });
        });
};