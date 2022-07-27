const fs = require('fs');
const Sequelize = require('sequelize');
var DataTypes = require('sequelize/lib/data-types');
const sequelize = new Sequelize('myname', 'root', '', {
  host: 'localhost',
  dialect: "mysql"
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const files = fs.readdirSync('./model');
files.forEach(function (file){
  if(file != 'connection.js'){

  
  let splitFile = file.split('.js');
  let name = splitFile[0];
  let filePath = `./${file}`
  db[name] = require(filePath)(sequelize,Sequelize);
  }

})

db.user = require('./user')(sequelize, DataTypes);
db.product = require('./product')(sequelize, DataTypes)

db.product.belongsTo(db.user);
db.user.hasMany(db.product);

module.exports = db;
