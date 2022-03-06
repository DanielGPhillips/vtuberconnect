const { Schema, model } = require('mongoose');

const vtuberSchema = new Schema({
    id: {
        type: String,
    },

});

const Vtuber = model('Vtuber', vtuberSchema);

model.exports = Vtuber;