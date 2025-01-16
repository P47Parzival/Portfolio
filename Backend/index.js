const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require('body-parser')
const Client = require('./user')

const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/postfolio_contacts')
.then(() => console.log("mongodb connected"))

app.post('/api/contact', async(req, res) => {
    const {email, message} = req.body

    try {
        const newClient = Client({email, message});
        await newClient.save()
        res.json({success: true})
    } catch (err) {
        console.log("Error saving conatact", err)
        res.status(500).json({ success: false, message: 'Failed to save message.' })
    }
})

app.listen(5000, () => {
    console.log("app is listneing on port 5000")
})