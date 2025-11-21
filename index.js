const express = require('express');
const conectarDB = require('./config/db');
const app = express();
const cors = require("cors");

conectarDB();
app.use(cors());
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:4200', // Puerto donde corre Angular
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));


app.use('/casNov',require('./routes/rutas'));

app.listen(5000, 'localhost', ()=>{
    console.log('Servidor corriendo perfectamente');
})