const express = require('express');
const conectarDB = require('./config/db');
const app = express();
const cors = require("cors");

conectarDB();
app.use(cors());

const corsOptions = {
  origin: 'http://localhost:4200', // Puerto donde corre Angular
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

app.use(express.json({ limit: '50mb' })); // Aumenta de ~100kb a 50mb
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use('/casNov',require('./routes/rutas'));

app.listen(5000,()=>{
    console.log('Servidor corriendo perfectamente');
})