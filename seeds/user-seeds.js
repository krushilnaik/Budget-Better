const { User } = require("../models");

const userData = [
    {
        username: "johndoe",
        password: "password1"
    },
    {
        username: "janedoe",
        password: "password2"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;