var mongoose = require('mongoose');
var Schema = mongoose.Schema

var newsSchema = new Schema({
    tittle: { type: String, required: true },
    description: { type: String, required: true },
    created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('News', newsSchema)
