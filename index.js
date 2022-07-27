const db = require('./model/connection');
const express = require('express');
const app = express();
const port = 8000;
// db.sequelize.sync();
const bodyParser = require("body-parser");
const routerItem_tag = require('./routers/item_tag');
const routerUser = require('./routers/user');
const routerProduct = require('./routers/product');

app.use(bodyParser.json({ extended: true }));
app.use(routerItem_tag);
app.use('/api/user',routerUser);
app.use('/api/product',routerProduct);
app.listen(port,()=>{
    console.log(`connection is live at port no.${port}`);
})  