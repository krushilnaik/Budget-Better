const router = require("express").Router();
const userRoutes = require("./user-routes");
const eventRoutes = require("./event-routes");
const itemRoutes = require("./item-routes");

router.use("/users", userRoutes);
router.use("/posts", eventRoutes);
router.use("/comments", itemRoutes);

module.exports = router;