const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema - represents the structure of a document/ model
const ItemSchema = new Schema ({
    name: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
    //will give name and current date
});

//create model for item and itemSchema named item so we can bring it into other files
module.exports = Item =  mongoose.model('item', ItemSchema);