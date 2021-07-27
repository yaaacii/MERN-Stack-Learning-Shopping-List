const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');

//create routes

//@route    GET api/items
//@desc     Get all Items
//@access   Public
router.get('/', (req, res) => {
    //fetch db and give us the items in decending order
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});

module.exports = router;