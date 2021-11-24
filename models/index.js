const User = require("./User");
const Event = require("./Event");
const Item = require("./Item");

// defining relationships

Event.hasMany(Item);

User.hasMany(Event);

Item.belongsTo(Event);