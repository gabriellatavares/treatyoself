const app  = require('express')();
const port = process.env.port || 8080;
require('dotenv').config()
// =============== BODY PARSER SETTINGS =====================
const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// =============== DATABASE CONNECTION =====================
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
async function connecting(){
    try {
        await mongoose.connect('mongodb://127.0.0.1/auth', { useUnifiedTopology: true , useNewUrlParser: true })
        console.log('Connected to the DB')
    } catch ( error ) {
        console.log('ERROR: Seems like your DB is not running, please start it up !!!');
    }
}
connecting()    
//================ CORS ================================
const cors = require('cors');
app.use(cors());
// =============== ROUTES ==============================
app.use('/users', require('./routes/users.routes'));
// =============== START SERVER =====================
app.listen(port, () => 
    console.log(`server listening on port ${port}`
));