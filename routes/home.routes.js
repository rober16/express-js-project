const router = require("express").Router();
const {HomeController} = require("../controllers");
const homeController = require("../controllers/home.controller");

router.get("/", homeController.index);
router.get("/about", homeController.about);

module.exports = router;