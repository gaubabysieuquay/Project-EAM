'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('assets_histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      location: {
        type: Sequelize.STRING
      },
      owner: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      assetId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'assets',
          key: 'id'
        }
      }
    },{
      timestamps: false // field: createAt and updateaAt
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('assets_histories');
  }
};