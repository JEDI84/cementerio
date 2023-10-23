const router = require('express').Router()

router.use("/graveyard", require("./graveyard.router"))
router.use("/personal", require("./personal.router"))

module.exports = router
