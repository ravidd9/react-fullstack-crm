const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Client = require('../models/Client')

const getClients = async () => Client.find({})


router.get('/sanity', function (req, res) {
    res.send('OK!')
})

router.get('/clients', async function (req, res) {
    let clients = await getClients()
    res.send(clients)
})

router.put('/owner/:id/:owner', function (req, res) {
    const id = req.params.id
    const owner = req.params.owner

    let update = Client.findOneAndUpdate({ _id: id }, { owner: owner })
    update.then(function (client) {
        res.send("Client's owner has updated to " + owner)
    })
})

router.put('/emailType/:id/:emailType', function (req, res) {
    const id = req.params.id
    const emailType = req.params.emailType

    let update = Client.findOneAndUpdate({ _id: id }, { emailType: emailType })
    update.then(function (client) {
        res.send("Client's email type has updated to " + emailType)
    })
})

router.put('/declare/:id', function (req, res) {
    const id = req.params.id

    let update = Client.findOneAndUpdate({ _id: id }, { sold: true })
    update.then(function (client) {
        res.send("sold!")
    })
})

router.put('/client/:id', async function (req, res) {
    const { name, country } = req.body
    const id = req.params.id
    let update = await Client.findOneAndUpdate({ _id: id }, { name, country })
    res.send("Client has updated")
})

router.post('/client', function (req, res) {
    const newClient = new Client(req.body)

    let save = newClient.save()
    save.then(function (client) {
        res.send('Client has been saved')
    })
})

module.exports = router
