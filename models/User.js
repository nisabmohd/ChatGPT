const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: ""
    },
    password: {
        type: String,
        min: 6
    },
    queries: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Query"

        }
    ]
}, { timestamps: true })

module.exports = new mongoose.model('users', userSchema)