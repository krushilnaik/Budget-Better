const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Event, User, Item } = require("../../models");

// get all events the user has made for their dashboard
router.get("/", (req, res) => {
    Event.findAll({
        where: {
            user_id: req.session.user_id
        },
        include: {
            model: Item
        }
    })
        .then(dbEventData => {
            const events = dbEventData.map(event => event.get({ plain: true }));
            res.render("dashboard", {
                events, 
                loggedIn: true
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get one event from the user's dashboard
router.get("/edit/:id", (req, res) => {
    Event.findOne({
        where: {
            id: req.params.id
        },
        include: {
            model: Item
        }
    })
        .then(dbEventData => {
            if (!dbEventData) {
                res.status(404).json({ message: "No event found with this id." });
                return;
            }

            const event = dbEventData.get({ plain: true });
            res.render("edit-event", {
                event,
                loggedIn: true
            });
        });
});

module.exports = router;