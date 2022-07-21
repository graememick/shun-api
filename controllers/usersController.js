const express = require("express");
const router = express.Router();
const db = require("../db/knex");

router.get("/", async (req, res) => {
    try {
        const users = await db("users")
            .select("*")
            .timeout(1500);
        res.send(users).status(204);
    } catch (err) {
        res.send(err).status(404);
    }
});

router.get("/:username", async (req, res) => {
    const {
        username
    } = req.params;
    console.log("user by username endpoint called");
    console.log(req.params);
    try {
        const user = await db("users")
            .select("*")
            .where("username", username)
            .first()
            .timeout(1500);
        res.send(user).status(204);
    } catch (err) {
        res.send(err).status(404);
    }
});

router.post("/", async (req, res) => {
    const {
        email,
        first_name,
        last_name,
        username
    } = req.body;
    try {
        await db("users")
            .insert({
                email: email,
                first_name: first_name,
                last_name: last_name,
                username: username
            })
        res.status(204).end();
    } catch (err) {
        res.send(err).status(404)
    }
});

router.patch("/:username", async (req, res) => {
    const {
        username
    } = req.params;
    const edits = req.body;
    try {
        await db("users")
            .where("username", username)
            .update(edits);
        res.status(204).end();
    } catch (err) {
        res.send(err).status(404);
    }
});

router.delete("/:username", async (req, res) => {
    const {
        username
    } = req.params;
    try {
        await db("users")
            .where("username", username)
            .del()
            .timeout(1500);
        res.status(204).end();
    } catch (err) {
        res.send(err).status(404);
    }
});

module.exports = router;