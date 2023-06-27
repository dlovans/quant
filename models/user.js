const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    google: {
        type: Boolean,
        default: false
    },
    linkedin: {
        type: Boolean,
        default: false
    },
    apple: {
        type: Boolean,
        default: false
    },
    signinAttempts: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('users', userSchema)