const mongoose = require("mongoose");

const ShelterSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "must have a title!"],
        minLength: [3, "need at least 3 characters"]
    },

    
    type: {
        type: String,
        required: [true, "must have a title!"],
        minLength: [3, "need at least 3 characters"]
    },

    description: {
        type: String,
        required: [true, "must have a description!"],
        minLength: [3, "need at least 3 characters"]
    },
    skillone: {
        type: String,
        required: [true, "must have a description!"],
        minLength: [3, "need at least 3 characters"]
    },
    skilltwo: {
        type: String,
        required: [true, "must have a description!"],
        minLength: [3, "need at least 3 characters"]
    },
    skillthree: {
        type: String,
        required: [true, "must have a description!"],
        minLength: [3, "need at least 3 characters"]
    }

}, {timestamps: true})



const Shelter = mongoose.model("Shelter", ShelterSchema);

module.exports = Shelter;