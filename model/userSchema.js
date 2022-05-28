const mongoose = require("mongoose")
const schema = mongoose.Schema


const userSchema = new schema({

    "full_name": {
        type: 'String'
    },

    "email": {
        type: 'string'
    },

    "team_name": {
        type: 'string'
    }
},
    { timestamps: true });


const users = mongoose.model('users1', userSchema)
module.exports = users