const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

//localhost:3000
router.route("/").get(userController.getAllTask).post(userController.createTask);

//localhost:3000/:id
router.route("/:id").get(userController.getOneTask);

module.exports = router;