const { Client } = require('pg')

const client_obj = new Client({
    host: "localhost",
    user: 'postgres',
    port: 5432,
    password: "Pradeep@1234",
    database: "own-app-db"

})

module.exports = client_obj