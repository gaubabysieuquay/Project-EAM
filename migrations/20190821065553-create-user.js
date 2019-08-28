'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      created: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
      },{
        timestamps: false // field: createAt and updateaAt  
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};