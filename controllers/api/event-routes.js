const router = require("express").Router();
const { User, Event, Item } = require("../../models");
const userAuth = require("../../utils/auth");

// get all events
router.get("/", (req, res) => {
    Event.findAll({})
        .then(dbEventData => res.json(dbEventData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get one event by id
router.get("/:id", (req, res) => {
    Event.findOne({
        where: {
            id: req.params.id
        },
        include: [{
            model: User,
            attributes: { 
                exclude: ['password'] 
            }
        },
        {
            model: Item
        }]
    })
        .then(dbEventData => {
            if (!dbEventData) {
                res.status(404).json({ message: "No event found with this id." });
                return;
            }
            res.json(dbEventData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// create a new event
router.post("/", userAuth, (req, res) => {
    if (req.session) {
        Event.create({
            title: req.body.title,
            date: req.body.date,
            budget: req.body.budget,
            user_id: req.session.user_id
        })
            .then(dbEventData => res.json(dbEventData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    };
});

// put route goes here
router.put("/:id", (req, res) => {
    Event.update(
        {
            title: req.body.title,
            date: req.body.date,
            budget: req.body.budget
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbEventData => {
            if (!dbEventData) {
                res.status(404).json({ message: "No event found with this id." });
                return;
            }
            res.json(dbEventData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// delete one event by id
router.delete("/:id", userAuth, (req, res) => {
    Event.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbEventData => {
            if (!dbEventData) {
                res.status(404).json({ message: "No event found with this id." });
                return;
            }
            res.json(dbEventData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;