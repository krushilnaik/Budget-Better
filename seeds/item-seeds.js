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
        name: "christmas lights",
        price: 100,
        event_id: 2
    },
    {
        name: "birthday cake",
        price: 300,
        event_id: 3
    }
];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;