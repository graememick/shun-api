const express = require("express");
const router = express.Router();
const db = require("../db/knex");
const Recipes = require("../models/recipes");

router.get("/:name", async (req, res) => {
    const {
        name
    } = req.params;
    try {
        const recipe = await Recipes.findOne(name)
        res.send(recipe).status(204);
    } catch (err) {
        res.send(err).status(404);
    }
});

module.exports = router;