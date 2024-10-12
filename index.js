const express = require('express')
const router = require('./src/router/api')

const port = 3000
const app = express()

app.use(express.json());

app.use(router)

app.listen(port, () => {
    console.log(`rodando o servidor na porta ${port}`)
})