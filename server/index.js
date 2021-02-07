const express = require('express');
const app = express();
const path = require('path')
const port = process.env.port || 3040;
require('dotenv').config();
// =============== BODY PARSER SETTINGS =====================
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// =============== DATABASE CONNECTION =====================
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
async function connecting() {
	try {
		//'mongodb://127.0.0.1/test_mongodb'
		await mongoose.connect('mongodb+srv://gabriellatavares:farofinha@ecommercecluster.dajxy.mongodb.net/testProducts?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true });
		console.log('Connected to the DB');
	} catch (error) {
		console.log('ERROR: Seems like your DB is not running, please start it up !!!');
	}
}
connecting();
mongoose.set('useCreateIndex', true)
//================ CORS ================================
const cors = require('cors');
app.use(cors());


app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

	next();
});

require("dotenv").config({ path: "./.env" });

// =============== ROUTES ==============================
app.use('/admin', require('./routes/admin.routes'));
app.use('/products', require('./routes/products.route'));
app.use('/payment', require('./routes/payment.route'))
app.use('/emails', require('./routes/email.route.js'));

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', '200.html'));
});
// =============== START SERVER =====================
app.listen(port, () => console.log(`server listening on port ${port}`));
