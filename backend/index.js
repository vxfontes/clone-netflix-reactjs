const express = require('express');
const app = express();
const morgan = require('morgan');

// rotas provisorias
app.get('/', (req, res) => {
    res.json({mensagem: "todos os registros"});
});

app.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json({mensagem: `pegar somente registro com id: ${id}`})
});

//criar registro
app.post('/', (req, res) => {
    const body = req.body;
    res.json(body);
});

app.put('/:id', (req, res) => {
    const id = req.params.id;
    res.json({mensagem: `atualizar somente registro com id: ${id}`});
});

app.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({mensagem: `deletar somente registro com id: ${id}`});
});


//////////////////////////////////////////////////////////
app.use(morgan('dev'));
app.listen(8080, () => {
    console.log('Servidor online');
});