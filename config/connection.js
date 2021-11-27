const {
	parsed: { DB_NAME, DB_PW, DB_USER }
} = require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = process.env.JAWSDB_URL
	? new Sequelize(process.env.JAWSDB_URL)
	: new Sequelize({
			database: DB_NAME,
			username: DB_USER,
			password: DB_PW,
			dialect: 'mysql',
			port: 3306
	  });

module.exports = sequelize;
