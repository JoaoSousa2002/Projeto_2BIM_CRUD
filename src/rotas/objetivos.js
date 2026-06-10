const express = require('express')
const router  = express.Router()
const knex    = require('./database/knex')

//Nome da tabela: objetivos

//GET <- Recebe os dados (Select) Retorna tudo
router.get('/', async (req, res) => {
  try {
    const objetivos = await knex('objetivos').select('*')
    res.json(objetivos)
  } catch (err) {
    res.status(500).json({ erro: err.message })
  }
})

//Retorna a linha com o nome enviado para pesquisar
router.get('/nome', async (req, res) => {
  try {
    const produto = await knex('objetivos').where({ id: req.params.id }).first()
    if (!produto) return res.status(404).json({ erro: 'Não encontrado' })
    res.json(produto)
  } catch (err) {
    res.status(500).json({ erro: err.message })
  }
})

//POST <- CREATE, Envia dados para serem adicionados na tabela



router.post('/Criar', async (req, res) => {
  try {
    const { nomeObjetivo, Descricao, iniciarHoje } = req.body
    const [id] = await knex('objetivos').insert({ nomeObjetivo, Descricao, iniciarHoje })
    res.status(201).json({ nomeObjetivo, Descricao, iniciarHoje })
  } catch (err) {
    res.status(500).json({ erro: err.message })
  }
})

//PUT
router.put('/Atualizar', async (req, res) => {
  try {
    const { nome, preco } = req.body
    const linhas = await knex('produtos').where({ id: req.params.id }).update({ nome, preco })
    if (!linhas) return res.status(404).json({ erro: 'Não encontrado' })
    res.json({ mensagem: 'Atualizado com sucesso' })
  } catch (err) {
    res.status(500).json({ erro: err.message })
  }
})

//REMOVE
router.delete('/Remover', async (req, res) => {
  try {
    const linhas = await knex('produtos').where({ id: req.params.id }).delete()
    if (!linhas) return res.status(404).json({ erro: 'Não encontrado' })
    res.json({ mensagem: 'Deletado com sucesso' })
  } catch (err) {
    res.status(500).json({ erro: err.message })
  }
})

module.exports = router