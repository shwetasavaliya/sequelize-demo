const express = require('express');
const router = new express.Router();
const ControllersItem_tag = require('../controllers/item_tag');


router.post("/create",ControllersItem_tag.creatItem_tag);
    

module.exports = router;