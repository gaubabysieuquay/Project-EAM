'use strict';
module.exports = (sequelize, Sequelize) => {
  const Asset = sequelize.define('asset', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      barcode_id: Sequelize.STRING,
      barcode: Sequelize.STRING,
      name: Sequelize.STRING,
      quantity: Sequelize.INTEGER,
      price: Sequelize.INTEGER,
      unit: Sequelize.STRING,
      note: Sequelize.STRING,
      created: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
    },{
      timestamps: false // field: createAt and updateaAt  
    }
  );
  /*Asset.associate = models => {
    Asset.hasMany(models.Assets_history);
  };*/
  return Asset;
};