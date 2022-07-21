const express = require("express");
const { default: knex } = require("knex");

const setupServer = () => {
   const app = express();
   app.use(express.json());

  app.get("/api/users", async (req, res) => {
    try {
      const users = await db("users")
      .select("*")
      .timeout(1500)
      res.send(users).status(200);
      } catch(err){
      res.send(err).status(404);
    }});

  app.post("/api/users", async (req, res) => {
    console.log(req.body);
  });

   return app;
};



module.exports = {setupServer};