const { Item } = require("../models");

const itemData = [
    {
        name: "Flowers",
        price: 200
    },
    {
        name: "Limo",
        price: 500
    },
    {
        name: "Balloons",
        price: 50
    },
    {
        name: "christmas lights",
        price: 100
    },
    {
        name: "birthday cake",
        price: 300
    }
];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;