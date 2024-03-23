import mongoose from "mongoose";

const customDictionary = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    definition: {
        type: String,
        required: true
    },
    scenario: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        default: ''
    },
})

const dictionary = mongoose.model("dictionary", customDictionary)

export default dictionary