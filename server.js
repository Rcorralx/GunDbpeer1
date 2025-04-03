
const express = require('express')
const Gun = require('gun')
//create an express application
const app = express()
//get port from environment or use 8765
const port = process.env.PORT || 3000

app.use(Gun.serve)
//listen to a port for an incoming request
const server = app.listen(port, () => {
    console.log(`GunDB Relay Peer Listening on: http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.send(`GunDB Relay Peer Running on port: ${port}`)
})

Gun({ web: server })