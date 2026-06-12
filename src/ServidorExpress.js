const express = require('express');
const cors = require('cors')
const app = express();
require('dotenv').config()

const knex = require('./database/knex.js')

app.use(cors({ origin: `http://127.0.0.1:${process.env.LS_PORT}` }));
app.use(express.json());
app.use(express.static('public'))

app.use(express.json())


app.get('/', async (req, res) => {
  try {
    const { nome } = req.query; // recebe ?nome="Joao" da URL

    let objetivos;

    if (nome) {
      objetivos = await knex('objetivos').where('nome', nome).select('*');
    } else {
      objetivos = await knex('objetivos').select('*');
    }
    res.json(objetivos);
  }
  catch (err) {
    res.status(500).json({ erro: err.message })
  }
})

app.delete('/DELETE/', async (req, res) => {
  const { id } = req.query
  await knex('objetivos').where('id', id).delete()

  res.json({ mensagem: `Objetivo deletado com sucesso, recarregue a pagina para continuar` });
})

app.post('/CREATE', async (req, res) => {

  const { nome, descricao, status } = req.body

  if (status === "Sim") {
    await knex('objetivos').insert({
      nome: nome,
      descricao: descricao,
      status: "Em progresso",
      data_inicio: knex.fn.now(),
      data_fim: null
    })
  } else if (status === "Não") {
    await knex('objetivos').insert({
      nome: nome,
      descricao: descricao,
      status: "Não iniciado",
      data_inicio: null,
      data_fim: null
    })
  }
  res.json({ Mensagem: `Objetivo ${nome} adicionado com sucesso` })

});

app.put('/UPDATE/', async (req, res) => {
  const { id, nome, descricao, status } = req.body
  let { data_inicio } = req.body

  if (status === "Não iniciado") {
    await knex('objetivos')
      .where({ id: id })
      .update({
        nome: nome,
        descricao: descricao,
        status: status,
        data_inicio: null,
        data_fim: null
      })

  } else if (status === "Em progresso") {
    await knex('objetivos')
      .where({ id: id })
      .update({
        nome: nome,
        descricao: descricao,
        status: status,
        //Se o data_inicio estiver vazio (null) irá adicionar a data de hoje, se não, o valor de null
        data_inicio: data_inicio = data_inicio === null ? knex.fn.now() : data_inicio,
        data_fim: null
      })
  } else if (status === "Finalizado") {
    await knex('objetivos')
      .where({ id: id })
      .update({
        nome: nome,
        descricao: descricao,
        status: status,
        data_inicio: data_inicio = data_inicio === null ? knex.fn.now() : data_inicio,
        data_fim: knex.fn.now()
      })
  }
  res.json({ mensagem: `Objetivo ${nome} atualizado com sucesso` })
})

app.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:3000`)
})
