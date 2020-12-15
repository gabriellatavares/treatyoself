const app = require('express')();
// const express = require('express');
// const app = express();
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
		await mongoose.connect(process.env.MONGO, { useUnifiedTopology: true, useNewUrlParser: true });
		console.log('Connected to the DB');
	} catch (error) {
		console.log('ERROR: Seems like your DB is not running, please start it up !!!');
	}
}
connecting();
//================ CORS ================================
const cors = require('cors');
app.use(cors());
// =============== ROUTES ==============================
app.use('/users', require('./routes/users.routes'));
// =============== START SERVER =====================
app.listen(port, () => console.log(`server listening on port ${port}`));
