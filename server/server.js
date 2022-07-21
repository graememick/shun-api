const express = require("express");
// const knex = require("knex");
const db = require("../db/knex");
 
const setupServer = () => {
   const app = express();

   app.use(express.json());

  app.get("/api/users",  async (req, res) => {
    try {
      const users = await db("users")
      .select("*")
      .timeout(1500);
      res.send(users).status(204);
      console.log(users)
      } catch(err){
      res.send(err).status(404);
    }});


  app.get("/test", (req, res) => {
    res.send("hello world").status(200)
  })

  app.post("/api/user", async (req, res) => {
    const { email, first_name, last_name } = req.body;
    console.log("body:", req.body);
    await db("users")
    .insert({
      email: email,
      first_name: first_name,
      last_name: last_name
    })
    try {

    } catch(err){
      res.send(err).status(404)
    }
  });

   return app;
};



module.exports = {setupServer};