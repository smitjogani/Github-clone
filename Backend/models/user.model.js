const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        default: ""
    },
    profileUrl: {
        type: String,
        required: true,

    },
    avtarUrl: {
        type: String,
    },
    likedProfiles: {
        type: [String],
        default: []
    },
    likedBy: [
        {
            username: {
                type: String,
                required: true
            },
            avatarUrl: {
                type: String,
            },
            likedDate: {
                type: Date,
                default: Date.now
            }
        }
    ]
}, { timestamps: true })


module.exports = mongoose.model("users", userSchema);;