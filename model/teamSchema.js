const mongoose = require("mongoose");
const schema = mongoose.Schema



const teamSchema = new schema({

    "full_name": {
        type: 'string'
    },

    "email": {
        type: 'string'
    },

    "number": {
        type: 'string'
    },

    "city": {
        type: 'string'
    },

    "url": {
        type: 'string'
    }

},
    { timestamps: true });

const teams = mongoose.model('teams', teamSchema)
module.exports = teams
