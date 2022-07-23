/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ingredients').del()
  await knex('ingredients').insert([
    {id: 1, name: 'Bacon'},
    {id: 2, name: 'Onions'},
    {id: 3, name: 'Carrots'},
    {id: 4, name: 'Potatoes'},
    {id: 5, name: 'Cabbage'},
    {id: 6, name: 'Olive Oil'},
    {id: 7, name: 'Salt'},
    {id: 8, name: 'Water'}
  ]);
};
