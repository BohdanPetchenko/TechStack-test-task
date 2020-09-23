const Bike = require('../Models/models')

module.exports = function DeleteBike(req, res) {

    const id = req.params.id;
    Bike.findByIdAndDelete(id, function (err, bike) {

        if (err) return console.log(err);
        res.send(JSON.stringify(bike));
    });
}

