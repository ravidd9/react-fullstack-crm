const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const api = require('./server/routes/api')
const mongoose = require('mongoose')

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'node_modules')));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/crmDB", {
    useNewUrlParser: true
}, function (err) {
    if (!err) {
        console.log('success')
    } else {
        console.log(err)
    }
})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))


// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

//     next()
// })
app.use('/', api)
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});




const port = 8000
app.listen(process.env.PORT || port, function () {
    console.log(`Server running on ${port}`)
})