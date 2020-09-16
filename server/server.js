const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');

//including file system - Read files Create files Update files. Delete files Rename files

var fs = require('fs'); 
require('dotenv/config'); 
// Initialize the app
const app = express();

// Middlewares
// Form Data Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));

// Json Body Middleware
app.use(bodyParser.json());

// Cors Middleware
app.use(cors());

// Use the passport Middleware
app.use(passport.initialize());
// Bring in the Passport Strategy
require('./config/passport')(passport);

// Seting up the static directory
app.use(express.static(path.join(__dirname, 'public')));

// Bring in the Database Config and connect with the database
const db = require('./config/keys').mongoURI;
mongoose.connect(db, {
    useNewUrlParser: true
}).then(() => {
    console.log(`Database connected successfully ${db}`)
}).catch(err => {
    console.log(`Unable to connect with the database ${err}`)
});

//check connection 
/*a
pp.get('/', (req, res) => {
    return res.send("<h1>Hello World</h1>");
});
*/
//User Route
const users = require('./routes/api/users');
app.use('/api/users', users);   

//service Route
const service = require('./routes/api/services')
app.use('/api/services', service); 


//Port
const PORT = process.env.PORT || 5000;

app.get('*', (req, res) => {
   // res.sendFile(path.join(__dirname, '../client/public', 'index.html'));
    res.json({msg:"error"})
})

app.listen(PORT, () => {
    console.log('Server started on port: ',PORT);
})
