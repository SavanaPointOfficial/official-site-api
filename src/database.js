
const mongoose = require('mongoose');
const urlDev = 'mongodb://localhost/savanapoint-contacts';
const mongoDB = 'mongodb+srv://francisco-savanapoint:Luisa@jaime1996@cluster0-jao6i.mongodb.net/savanapoint?retryWrites=true&w=majority';
mongoose.connect(urlDev, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).then(() => {
        console.log('DB is connected')
    }).catch(() => {
        console.log('Failer to connect')
    })
 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));