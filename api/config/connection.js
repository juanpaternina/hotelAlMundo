var mongoose = require('mongoose');
var mongoDB = 'mongodb://almundo:amaterasu202500@ds039960.mlab.com:39960/almundo_db';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
