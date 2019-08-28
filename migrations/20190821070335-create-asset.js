'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('assets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      barcode_id: {
        type: Sequelize.STRING
      },
      barcode: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      unit: {
        type: Sequelize.STRING
      },
      note: {
        type: Sequelize.STRING
      },
      created: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    },{
      timestamps: false // field: createAt and updateaAt  
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('assets');
  }
};