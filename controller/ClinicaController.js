const express = require('express');

const clinicaModel = require('../model/ClinicaModel');

const router = express.Router();

router.get('/listarPacientes', (req, res)=>{

    clinicaModel.findAll().then(
        (pacientes)=>{
            res.status(200).send(pacientes);
        }
    ).catch(
        (error)=>{
            res.status(500).json({"MSG":error})
        }
    );
});

router.post('/cadastrarPaciente', (req, res)=>{

    console.log(req.body)

    let {nome, telefone, celular, email, nomeResponsavel, telefoneResponsavel } = req.body;
    clinicaModel.create({
        nome,
        telefone,
        celular,
        email,
        nomeResponsavel,
        telefoneResponsavel
    }).then(
        ()=>{
            res.status(200).json({"MSG": "PACIENTE INSERIDO COM SUCESSO!!"});
        }
    ).catch(
        (error)=>{
            res.status(500).json({"MSG":error})
        }
    );
});

module.exports = router;