const db = require('../model/connection');

exports.createProduct = async(req,res)=>{
    const body = req.body;
    const user = await db.user.findOne({where:{id:body.userId}})
    if(!user)return res.send("user not available"); 
    const productData = await db.product.create(body);
    res.send(productData);
}

exports.getProduct = async(req,res)=>{
    const product = await db.product.findAll(
        {
            include:[{
                model:db.user,
            }]
        }
    );
// console.log('\x1b[36m%s\x1b[0m', 'I am cyan');
// console.log('\x1b[33m%s\x1b[0m', 'Yellow');
res.send(product);
}

exports.deleteProduct = async(req,res) => {
    const id = req.query.id;
    const product = await db.product.findOne({where:{id}})
    if(!product) return res.send("product not found....");
    const deleteProduct = await db.product.destroy({where:{id}});
    res.status(200).send("product deleted....");
}

exports.updateproduct = async(req,res)=>{
    const id = req.query.id;
    const body = req.body;
    console.log(id);
    console.log(body);
    if(req.body.userId){
        const user = await db.user.findOne({where:{id:req.body.userId}})
        if(!user)return res.send("User Not Found.......");
    }
    const updateProduct = await db.product.update(body,{where:{id}})
    res.status(200).send("product updated....");
}
