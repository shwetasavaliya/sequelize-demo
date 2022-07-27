const db = require('../model/connection')

exports.createUser = async(req,res)=>{
    const body = req.body;
    const userData = await db.user.create(body);
    res.send(userData);
}

exports.getUser = async(req,res)=>{
    const userData = await db.user.findAll(
        {
            include:[{
                model:db.product
            }]
        }
    );
    res.send(userData);
}

exports.deleteUser = async(req,res)=>{
    const id = req.query.id;
    const userData1 = await db.user.findOne({
        include:{
            model:db.product
        },
        where:{id}});
    if(!userData1)return res.send("user not found....");
    const userData = await db.user.destroy({
        include:{
            model:db.product,
        },
        where:{id}
    })
    res.send("user is deleted...");
}