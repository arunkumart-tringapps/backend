'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('User1', {
    userId: {
        primaryKey: true,
        type: DataTypes.INTEGER,

      },
      firstname: {
        type: DataTypes.STRING,
        allowNull:false
      },
      lastname: {
        type: DataTypes.STRING
      },
      age: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('User1');
  }
};