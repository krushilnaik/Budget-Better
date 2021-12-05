const { Item } = require("../models");

const itemData = [
    {
        name: "Flowers",
        price: 200,
        event_id: 1,
    },
    {
        name: "Limo",
        price: 500,
        event_id: 1
    },
    {
        name: "Balloons",
        price: 50,
        event_id: 3
    },
    {
        name: "Christmas Lights",
        price: 100,
        event_id: 2
    },
    {
        name: "Birthday Cake",
        price: 300,
        event_id: 3
    },
    {
        name: "Catering",
        price: 7500,
        event_id: 1
    },
    {
        name: "Christmas Tree",
        price: 75,
        event_id: 2
    },
    {
        name: "Birthday Candles",
        price: 5,
        event_id: 3
    }
];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;