const mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment')
var con = require('../../config/database.config.js')

mongoose.createConnection()

autoIncrement.initialize(mongoose.createConnection(con.url))

const ShapeSchema = mongoose.Schema({
    name: String,
    type: String,
    radius: Number,
    quadrant: Number,
    widthSize: Number,
    heightSize: Number,
    orientation: Number,
    xpoints: [Number],
    ypoints: [Number]
});

ShapeSchema.plugin(autoIncrement.plugin, 'Shape')
module.exports = mongoose.model('Shape', ShapeSchema);