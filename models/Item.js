const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Item extends Model {};

Item.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        include: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        event_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "event",
                key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "item"
    }
);

module.exports = Item;