const express = require('express');
const router = express.Router();
const Filme = require('../models/filme');

router.get('/', (req, res) => {
    res.json({ mensagem: "todos os registros" });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `pegar somente registro com id: ${id}` })
});

//criar registro
router.post('/', async (req, res) => {
    try {
        const filme = req.body;
        //salvando documento no mongoose
        const response = await new Filme(filme).save();
        res.json({ error: false, filme: response });
    } catch (err) {
        res.json({ error: false, message: err.message });
    }
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `atualizar somente registro com id: ${id}` });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `deletar somente registro com id: ${id}` });
});

module.exports = router;