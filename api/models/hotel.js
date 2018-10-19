var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HotelSchema = new Schema({
	name: { type: String },
	stars: { type: Number },
	price: { type: Number },
	currency: { type: String },
	images: { type: Array },
});

// Virtual for hotel's price
HotelSchema.virtual('full_price').get(function() {
	return this.price + ', ' + this.currency;
});

module.exports = mongoose.model('Hotel', HotelSchema);
