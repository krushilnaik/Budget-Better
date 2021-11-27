const User = require("./User");
const Event = require("./Event");
const Item = require("./Item");

// defining relationships

Event.hasMany(Item, {
    foreignKey: "event_id"
});

User.hasMany(Event, {
    foreignKey: "user_id"
});