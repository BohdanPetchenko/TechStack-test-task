const Bike = require('../Models/models')

module.exports = function CreateBike(req, res) {

    if (!req.body) return res.sendStatus(400);

    const nameBike = req.body.nameBike;
    const typeBike = req.body.typeBike;
    const priceBike = req.body.priceBike;
    const bike = new Bike({ name: nameBike, type: typeBike, price: priceBike, isRented: false, rentCost: priceBike });

    bike.save(function (err) {
        if (err) return console.log(err);
        res.send(JSON.stringify(bike));
    });
}

