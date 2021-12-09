'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User1.init({
    userId:
    {
      type:DataTypes.UUID,
      primaryKey: true,
      defaultValue:DataTypes.UUIDV4
    },
    firstname: 
    {
      type:DataTypes.STRING,
      allowNull:false
    },
    lastname: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User1',
    tableName:"userinfo"
  });
  return User1;
};