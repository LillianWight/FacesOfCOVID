const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    img_url: String, // TODO image url validation
    story: {
        type: String,
        required: true,
    },
});

const Person = mongoose.model("Person", PersonSchema);

module.exports = Person;
