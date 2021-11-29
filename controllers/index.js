const router = require("express").Router();
const apiRoutes = require("./api");
const dashboardRoutes = require("./web/dashboard-routes");
const homeRoutes = require("./web/home-routes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;
