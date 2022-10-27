const express = require('express');

const app = express();

app.use(express.json());

const clinicaController = require('./controller/ClinicaController');

app.use('/', clinicaController)

app.listen(3000, ()=>{
    console.log('aplicação rodando em http://localhost:3000');
});