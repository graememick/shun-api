const express = require("express");
const router = express.Router();
const db = require("../db/knex");
const Recipes = require("../models/recipes");

router.get("/", async (req, res) => {
    try {
        const recipes = await Recipes.getAll()
        res.send(recipes).status(204);
    } catch (err) {
        res.send(err).status(404);
    }
});

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

router.post("/", async (req, res) => {
    const {
        user_id,
        name,
        description,
        entry_created,
        entry_posted
    } = req.body;
    try {
        await Recipes.create(
            user_id,
            name,
            description,
            entry_created,
            entry_posted)
        res.status(201).end();
    } catch (err) {
        res.send(err).status(404)
    }
});

router.patch("/:name", async (req, res) => {
    const {
        name
    } = req.params;
    const edits = req.body;
    try {
        await Recipes.update(name, edits)
        res.status(204).end();
    } catch (err) {
        res.send(err).status(404);
    }
});

router.delete("/:name", async (req, res) => {
    const {
        name
    } = req.params;
    try {
        await Recipes.delete(name)
        res.status(204).end();
    } catch (err) {
        res.send(err).status(404);
    }
});

module.exports = router;