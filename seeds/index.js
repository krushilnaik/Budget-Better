const seedUsers = require("./user-seeds");
const seedEvents = require("./event-seeds");
const seedItems = require("./item-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedEvents();
    console.log('\n----- EVENTS SEEDED -----\n');

    await seedItems();
    console.log('\n----- ITEMS SEEDED -----\n');

    process.exit(0);
};

seedAll();