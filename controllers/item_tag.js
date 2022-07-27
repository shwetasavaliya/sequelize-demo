const db = require('../model/connection');

exports.creatItem_tag = async(req,res)=>{
    const productData = req.body;
    const createData =await db.item_tag.create(productData);
}

