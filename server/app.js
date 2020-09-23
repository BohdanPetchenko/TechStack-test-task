const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require('body-parser');
const jsonParser = express.json();
const app = express();

app.use(bodyParser.json());

const GetAllBikes = require('./Controllers/GetAllBikes')
const GetCost = require('./Controllers/GetCost')
const CreateBike = require('./Controllers/CreateBike')
const DeleteBike = require('./Controllers/DeleteBike')
const RentBike = require('./Controllers/RentBike')
const AvailableBike = require('./Controllers/AvailableBike')



mongoose.connect("mongodb://localhost:27017/bikesdb", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, function (err) {
    if (err) return console.log(err);
    app.listen(3000, function () {
        console.log("Сервер ожидает подключения...");
    });
});



app.get("/api/all-bikes", function (req, res) {
    GetAllBikes(req, res)
});

app.get("/api/bikes/:id/:time", function (req, res) {
    GetCost(req, res)
});

app.post("/api/new-bike", jsonParser, function (req, res) {
    CreateBike(req, res)   
});

app.delete("/api/bikes/:id", function (req, res) {
    DeleteBike(req, res)    
});

app.put("/api/rent", function (req, res) {
    RentBike(req, res)
});

app.put("/api/available", function (req, res) {
    AvailableBike(req, res)
});