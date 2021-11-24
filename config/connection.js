require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
	database: process.env.DB_NAME,
	username: process.env.DB_USER,
	password: process.env.DB_PW,
	dialect: 'mysql',
	port: 3306
});

module.exports = sequelize;
