const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    creationDate: {
        type: Date,
        default: () => new Date(),
    }
});

module.exports = mongoose.model("Note", noteSchema);