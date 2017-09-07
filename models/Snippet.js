//Schema goes here

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const snippetSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    tag: {
        type: Array,
    },
    body: {
        type: String,
        require: true
    },
    notes: String
});

let Snippet = mongoose.model("Snippet", snippetSchema);

module.exports = Snippet;