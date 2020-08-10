const express = require('express');
const bodyParser = require('body-parser');
const cote = require('cote')
const app = express();
// Configure the db
const dbConfig = require('./config/mongo-config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const customers = require('./app/controllers/customer-resource.js');

// Connect to the db
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the customer-database");    
}).catch(err => {
    console.log('Could not connect to the customer-database. Exiting now...', err);
    process.exit();
});

// define a base route message
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Customer-Service!"});
});

require('./app/routes/routes.js')(app);

// listen for requests
app.listen(3001, () => {
    console.log("Customer-Service is listening on port 3001");
});