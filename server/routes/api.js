const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Client = require('../models/Client')

const getClients = async () => Client.find({})

const createClient = reqClient =>{
    const newClient = new Client({
        name: reqClient.name,
        email: reqClient.email,
        firstContact: reqClient.firstContact,
        emailType: reqClient.emailType,
        sold: reqClient.sold,
        owner: reqClient.owner,
        country: reqClient.country
    })
    return newClient
}

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

    let update = Client.findOneAndUpdate({_id: id}, {owner: owner})
    update.then(function(client){
        res.send("Client's owner has updated to " + owner)
    })
})

router.put('/emailType/:id/:emailType', function (req, res) {
    const id = req.params.id
    const emailType = req.params.emailType

    let update = Client.findOneAndUpdate({_id: id}, {emailType: emailType})
    update.then(function(client){
        res.send("Client's email type has updated to " + emailType)
    })
})

router.put('/client', function (req, res) {
    const newClient = createClient(req.body)

    let update = Client.findOneAndUpdate({_id: newClient._id}, {name: newClient.name, country: newClient.country})
    update.then(function(client){
        res.send("Client has updated")
    })
})

router.post('/client', function (req, res) {
    const newClient = createClient(req.body)

    let save = newClient.save()
    save.then(function (client) {
        res.send('Client has been saved')
    })
})

module.exports = router
