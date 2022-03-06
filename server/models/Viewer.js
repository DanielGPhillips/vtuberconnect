const { Schema, model } = require('mongoose');

const viewerSchema = new Schema({
    id: {
        type: String,
    },

});

const Viewer = model('Viewer', viewerSchema);

model.exports = Viewer;