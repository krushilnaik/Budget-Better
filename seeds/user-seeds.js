const { User } = require("../models");

const userData = [
    {
        email: "johndoe@mail.com",
        password: "password1"
    },
    {
        email: "janedoe@mail.net",
        password: "password2"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;