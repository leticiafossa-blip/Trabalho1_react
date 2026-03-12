const express = require('express')
const router = express.Router()

const { readData, writeData } = require('../utils/fileHandler')

// LISTAR TODOS OS HÓSPEDES
router.get('/listar_hospedes', (req, res) => {
    const hospedes = readData()
    res.json(hospedes)
})

// LISTAR HÓSPEDE POR ID
router.get('/listar_hospedes/:id', (req, res) => {

    const hospedes = readData()
    const id = parseInt(req.params.id)

    const hospede = hospedes.find(h => h.id === id)

    if (!hospede) {
        return res.status(404).json({ mensagem: "Hóspede não encontrado" })
    }

    res.json(hospede)
})

// CADASTRAR HÓSPEDE
router.post('/cadastrar_hospedes', (req, res) => {

    const hospedes = readData()

    const novoHospede = {
        id: Date.now(),
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        dataNascimento: req.body.dataNascimento,
        cpf: req.body.cpf,
        numeroQuarto: req.body.numeroQuarto
    }

    hospedes.push(novoHospede)

    writeData(hospedes)

    res.status(201).json({
        mensagem: "Hóspede cadastrado com sucesso",
        hospede: novoHospede
    })
})

// ATUALIZAR HÓSPEDE
router.put('/atualizar_hospedes/:id', (req, res) => {

    const hospedes = readData()
    const id = parseInt(req.params.id)

    const index = hospedes.findIndex(h => h.id === id)

    if (index === -1) {
        return res.status(404).json({ mensagem: "Hóspede não encontrado" })
    }

    hospedes[index] = {
        ...hospedes[index],
        ...req.body
    }

    writeData(hospedes)

    res.json({
        mensagem: "Hóspede atualizado com sucesso",
        hospede: hospedes[index]
    })
})

// DELETAR HÓSPEDE
router.delete('/deletar_hospedes/:id', (req, res) => {

    const hospedes = readData()
    const id = parseInt(req.params.id)

    const novosHospedes = hospedes.filter(h => h.id !== id)

    writeData(novosHospedes)

    res.json({
        mensagem: "Hóspede deletado com sucesso"
    })
})

module.exports = router