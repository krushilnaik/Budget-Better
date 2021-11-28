const { Event } = require("../models");

const eventData = [
    {
        title: "Wedding",
        date: "2021-12-12",
        budget: 350000,
        user_id: 1
    },
    {
        title: "Christmas Party",
        date: "2021-12-25",
        budget: 1000,
        user_id: 1
    },
    {
        title: "Birthday Party",
        date: "2022-02-19",
        budget: 500,
        user_id: 2
    }
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;