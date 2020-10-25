const express = require('express');
const mongoose = require('./database');
const router = require('./routes/routes');
const getRoutes = require('./routes/get.routes');
const deleteRoutes = require('./routes/delete.routes');
const updateRoutes = require('./routes/update.routes');
const cors = require('cors');

const app = express();
 const port = process.env.PORT || 3333;

app.use(cors())
app.use(express.json())


 app.use('/api',router);
 app.use('/api',getRoutes);
 app.use('/api',deleteRoutes);
 app.use('/api',updateRoutes);
 
 app.listen(port, () => {
   console.log(`Server on http://localhost:${port}`)
});


