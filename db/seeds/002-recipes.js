/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes').del()
  await knex('recipes').insert([
    {id: 1, user_id: 3, name: "Pumpkin Pie", description: "tasty food thing", entry_created: "2022-04-20", entry_posted: "2022-10-31"},
    {id: 2, user_id: 2, name: "Christmas Ham", description: "tasty food thing", entry_created: "2022-02-07", entry_posted: "2022-12-25"},
    {id: 3, user_id: 1, name: "Summer Spaghetti", description: "tasty food thing", entry_created: "2022-07-20", entry_posted: null },
  ]);
};
