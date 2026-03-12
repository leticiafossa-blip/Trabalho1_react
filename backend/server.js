const express = require('express')
const cors = require('cors')
const hospedesRoutes = require('./routes/clientes.routes')

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.use('/', hospedesRoutes)

app.get('/', (req, res) => {
    res.send(`Servidor rodando em http://localhost:${PORT}`)
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})