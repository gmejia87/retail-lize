const router = require("express").Router();

const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.send("That's the wrong Route!");
});

module.exports = router;
