const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let objectSchema = new Schema({
    name: {
        type: String,
        required: "Le nom est requis"
    },
    description: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    id_post: {
        type: String
    }
});

module.exports = mongoose.model('Object', objectSchema);