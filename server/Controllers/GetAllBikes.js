const Bike = require('../Models/models')

module.exports = function GetAllBikes(req, res) {

    Bike.find({}, function (err, bikes) {

        if (err) return console.log(err);
        res.send(JSON.stringify(bikes))
    });
}

