/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, email: 'joni@example.com', first_name: 'Joni', last_name: 'Mitchell', username: "Jmitch"},
    {id: 2, email: 'putney@example.com', first_name: 'Putney', last_name: 'Swope', username: "Truthandsoul"},
    {id: 3, email: 'karen@example.com', first_name: 'Karen', last_name: 'Carpenter', username: "Thecarpenters"}
  ]);
};
