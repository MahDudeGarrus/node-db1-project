const express = require("express");

const accountsRouter =  require('./accounts/accounts-router.js')

const server = express();

server.use(express.json());

server.use('/api/accounts', accountsRouter)

//CATCH ALL
server.use('*', (req, res) => {
    res.status(404).json({
        message: 'not found',
    })
})

module.exports = server;
