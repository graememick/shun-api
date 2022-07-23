const express = require("express");
const usersController = require("../controllers/usersController")
const recipesController = require("../controllers/recipesController")


const setupServer = () => {
	const app = express();

	app.use(express.json());
	app.use("/", express.static("public"))
	app.use("/api/users", usersController)
	app.use("/api/recipes", recipesController)
	return app;
};



module.exports = {
	setupServer
};