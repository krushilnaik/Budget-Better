const User = require("./User");
const Event = require("./Event");
const Item = require("./Item");

// defining relationships

Event.hasMany(Item, {
    foreignKey: "event_id"
});

Item.belongsTo(Event, {
    foreignKey: "event_id",
    onDelete: 'SET NULL'
});

User.hasMany(Event, {
    foreignKey: "user_id"
});

Event.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "SET NULL"
})

module.exports = {
    User,
    Event,
    Item
};