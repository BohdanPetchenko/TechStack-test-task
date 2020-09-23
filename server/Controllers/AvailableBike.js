const Bike = require('../Models/models')

module.exports = function AvailableBike(req, res) {
    if (!req.body) return res.sendStatus(400);
    const id = req.body.id;
    const price = req.body.price;
    Bike.findOneAndUpdate({ _id: id }, { isRented: false, rentCost: price }, { new: true }, function (err, bike) {
        if (err) return console.log(err);
        res.send(JSON.stringify(bike));
    });
}

