const { Event } = require("../models");

const eventData = [
    {
        title: "Wedding",
        date: "2021-12-12",
        budget: 350000
    },
    {
        title: "Christmas Party",
        date: "2021-12-25",
        budget: 1000
    },
    {
        title: "Birthday Party",
        date: "2022-02-19",
        budget: 500
    }
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;