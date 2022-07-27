module.exports=(sequelize,DataTypes) => {
    const User = sequelize.define('user', {
        id : {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        fname: {
            type: DataTypes.STRING,
        },
        lname:{
          type: DataTypes.STRING,
        },
        email:{
            type: DataTypes.STRING, 
        },
        address:{
            type: DataTypes.STRING,
        }
    });
    return User
}