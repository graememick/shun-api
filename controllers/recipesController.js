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
        id,
        user_id,
        name,
        description,
        entry_created,
        entry_posted,
        season,
        intructions,
        images_url
    } = req.body;
    try {
        await Recipes.create(
            id,
            user_id,
            name,
            description,
            entry_created,
            entry_posted,
            season,
            intructions,
            images_url
            )
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