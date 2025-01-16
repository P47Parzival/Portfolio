const mongoose = require("mongoose")

const clientschema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true
    },
    message:{
        type: String
    }
})

const Client = mongoose.model("Client", clientschema)
module.exports = Client