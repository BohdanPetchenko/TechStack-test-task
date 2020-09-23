const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bikeScheme = new Schema({
    name: String,
    type: String,
    price: Number,
    isRented: Boolean,
    rentCost: Number
}, { versionKey: false });

module.exports = bikeScheme