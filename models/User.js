'use strict';
module.exports = (sequelize, Sequelize) => {
  	const User = sequelize.define('user', {
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
  	User.associate = models => {
    // associations can be defined here
  	};
  return User;
};
/*const Sequelize = require('sequelize')
const db = require("../models/index.js")

module.exports = db.sequelize.define(
	'user',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
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
);*/