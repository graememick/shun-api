const express = require("express");
const router = express.Router();
const db = require("../db/knex");
const Users = require("../models/users")

router.get("/", async (req, res) => {
    try {
        const users = await Users.findMany()
        res.send(users).status(200);
    } catch (err) {
        res.send(err).status(404);
    }
});

router.get("/:username", async (req, res) => {
    const {
        username
    } = req.params;
    try {
        const user = await Users.findOne(username)
        res.send(user).status(200);
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
        await Users.create(email, first_name, last_name, username)
        res.status(201).end();
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
        await Users.update(username, edits)
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
        await Users.delete(username)
        res.status(204).end();
    } catch (err) {
        res.send(err).status(404);
    }
});

module.exports = router;