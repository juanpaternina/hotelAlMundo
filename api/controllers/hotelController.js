var Hotel = require('../models/hotel');

exports.getAll = function(req, res) {
	if (req.query.search) {
		const term = new RegExp(req.query.search, 'i');
		Hotel.find({ name: term })
			.then(hotels => {
				res.json(hotels);
			})
			.catch(e => {
				res.send('there is an error', e);
			});
	} else {
		Hotel.find({})
			.then(hotels => {
				res.json(hotels);
			})
			.catch(e => {
				res.send('there is an error', e);
			});
	}
};
