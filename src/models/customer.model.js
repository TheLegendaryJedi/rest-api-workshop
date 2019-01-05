let mongoose = require('mongoose')

const server = 'localhost'
const database = ''
const user = ''
const password = ''

mongoose.connect(`mongodb://localhost/rest-api-workshop`, { useNewUrlParser: true })

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)
