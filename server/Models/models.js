const mongoose = require("mongoose");
const bikeScheme = require('../Scheme/scheme')

const Bike = mongoose.model("Bike", bikeScheme);

module.exports = Bike