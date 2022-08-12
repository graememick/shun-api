const express = require("express");
const router = express.Router();
const db = require("../db/knex");
const Ingredients = require("../models/ingredients");

router.get("/", async (req, res) => {
    try {
        const ingredients = await Ingredients.getAll()
        res.send(ingredients).status(204);
    } catch (err) {
        res.send(err).status(404);
    }
});

router.get("/:name", async (req, res) => {
    const {
        name
    } = req.params;
    try {
        const ingredient = await Ingredients.findOne(name)
        res.send(ingredient).status(204);
    } catch (err) {
        res.send(err).status(404);
    }
});

// router.post("/", async (req, res) => {
//     const {
//         name
//     } = req.body;
//     try {
//         await Ingredients.create(name)
//         res.status(201).end();
//     } catch (err) {
//         res.send(err).status(404)
//     }
// });

// router.patch("/:name", async (req, res) => {
//     const {
//         name
//     } = req.params;
//     const edits = req.body;
//     try {
//         await Ingredients.update(name, edits)
//         res.status(204).end();
//     } catch (err) {
//         res.send(err).status(404);
//     }
// });

// router.delete("/:name", async (req, res) => {
//     const {
//         name
//     } = req.params;
//     try {
//         await Ingredients.delete(name)
//         res.status(204).end();
//     } catch (err) {
//         res.send(err).status(404);
//     }
// });

module.exports = router;