'use strict';
module.exports = (sequelize, Sequelize) => {
  const Assets_history = sequelize.define('assets_history', {
  	id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    location: {
      type:Sequelize.STRING
    },
    owner: {
      type:Sequelize.STRING
    },
    time: {
    	type: Sequelize.DATE,
		  defaultValue: Sequelize.NOW
    },
    assetId: {
      type: Sequelize.INTEGER,
      unique: true,
    }
  }, {
  	timestamps: false // field: createAt and updateaAt
  });
  /*Assets_history.associate = models => {
    Assets_history.belongsTo(models.Asset, {
    	foreignKey: 'assetsId',
        onDelete: 'CASCADE'
    });
  };*/
  return Assets_history;
};