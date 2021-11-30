const router = require("express").Router();
const { User, Event, Item } = require("../../models");
const userAuth = require("../../utils/auth");

// get all items
router.get("/", (req, res) => {
    Item.findAll({})
        .then(dbItemData => res.json(dbItemData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get one item by id
router.get("/:id", (req, res) => {
    Item.findOne({
        where: {
            id: req.params.id
        },
        include: {
            model: Event,
            include: {
                model: User,
                attributes: { 
                    exclude: ['password'] 
                }
            }
        }
    })
        .then(dbItemData => {
            if (!dbItemData) {
                res.status(404).json({ message: "No item found with this id." });
                return;
            }
            res.json(dbItemData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// create a new item
router.post("/", userAuth, (req, res) => {
    if (req.session) {
        Item.create({
            name: req.body.name,
            price: req.body.price,
            event_id: req.body.event_id
        })
            .then(dbItemData => res.json(dbItemData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
});

// item put route here

// delete one item by id
router.delete("/:id", userAuth, (req, res) => {
    Item.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbItemData => {
            if (!dbItemData) {
                res.status(404).json({ message: "No item found with this id." });
                return;
            }
            res.json(dbItemData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;