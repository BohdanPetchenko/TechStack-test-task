const Bike = require('../Models/models')

module.exports = function GetCost(req, res) {

    const id = req.params.id;
    const time = req.params.time;

    async function isCost(id, time) {
        let data;
        await Bike.findOne({ _id: id }, function (err, bike) {

            let cost = time <= 20 ? time * bike.price : time * bike.price / 2;
            if (err) return console.log(err);
            data = cost
        })

        await Bike.findOneAndUpdate({ _id: id }, { rentCost: data }, { new: true }, function (err, bike) {

            if (err) return console.log(err);
            res.send(bike);
        });

    }
    isCost(id, time)
}

