process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const express = require('express');
var bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 4000;

const corsOpts = {
  'Access-Control-Allow-Origin': '*',
}

app.use(cors(corsOpts));
app.use(bodyParser.json())

axios.get('http://localhost:3000/', (req,res) => {
  const accessToken = localStorage.getItem('accessToken');
  res.send({accessToken: accessToken})
})
const aws = 'https://ec2-18-224-170-21.us-east-2.compute.amazonaws.com:8443/notebooks';

app.post("/Notebooks", async (req, res) => {
  try {
    const { accessToken } = req.body;
    const { notebooks } = await getNotebooks(accessToken)
    // const notebooks = await JSON.stringify(data)
    console.log('notebooks', notebooks)
    res.send(notebooks)
  } catch (err) {
    console.error('Erro na requisição:', err);
      res.status(500).json({ error: 'Erro, notebook não encontrado' });
  }
})

app.get("/Notebooks", (req, res) => {
  const notebooksData = {
    notebooks: [notebookValue]
  };

  res.json(notebookValue);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

async function getNotebooks(accessToken) {
  const aws = 'https://ec2-18-224-170-21.us-east-2.compute.amazonaws.com:8443/notebooks';

  try {
    const data = await axios.get(aws, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    // console.log(notebooks)
    return data.data
  } catch (err) {
    return err
  }
}