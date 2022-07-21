const express = require("express");
const usersController = require("../controllers/usersController")

const setupServer = () => {
	const app = express();

	app.use(express.json());
  app.use("/", express.static("public"))
  app.use("/api/users", usersController)
	return app;
};



module.exports = {
	setupServer
};