const Bike = require('../Models/models')

module.exports = function RentBike(req, res) {

    if (!req.body) return res.sendStatus(400);

    const id = req.body.id;

    Bike.findOneAndUpdate({ _id: id }, { isRented: true }, { new: true }, function (err, bike) {
        if (err) return console.log(err);
        res.send(JSON.stringify(bike));
    });
}

