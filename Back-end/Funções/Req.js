const aws = 'https://ec2-18-224-170-21.us-east-2.compute.amazonaws.com:8443/notebooks';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

function Requisicao() {


    app.get("/login", (req, res) => {
        const accessToken = req.query.accessToken;
        // console.log("accessToken:", accessToken);
        res.json({ resultado: "200 OK" });
    });

    app.get("/Requisicao", (req, res) => {
        const accessToken = req.query.access_token;

        axios.get(aws, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
            .then(response => {
                res.json({ resultado: "OK!" });
                // console.log();
            })
            .catch(error => {
                console.error('Erro na requisição:', error);
                res.status(500).json({ error: 'Erro, notebook não encontrado' });
            });
    });

}

module.exports = Requisicao;