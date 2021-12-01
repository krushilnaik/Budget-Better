const { User } = require('../models');

const userData = [
	{
		email: 'johndoe@mail.com',
		password: 'password1'
	},
	{
		email: 'janedoe@mail.net',
		password: 'password2'
	},
	{
		email: 'krushilnaik96@gmail.com',
		password: '$2b$10$zVNFhImeasLQvsEUwbZic.v.ztFhOrmWLf8fZSKQ1wgSI9eNXqUNm'
	}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
