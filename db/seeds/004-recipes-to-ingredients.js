/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes_to_ingredients').del()
  await knex('recipes_to_ingredients').insert([
    {recipe_id: 4, ingredient_id: 1, unit_of_measurement: 'grams', amount: 170 },
    {recipe_id: 4, ingredient_id: 2, unit_of_measurement: 'whole', amount: 1 },
    {recipe_id: 4, ingredient_id: 3, unit_of_measurement: 'whole', amount: 0.5 },    {recipe_id: 1, ingredient_id: 1, unit_of_measurement: 'rowValue1', amount: 0 },
    {recipe_id: 4, ingredient_id: 4, unit_of_measurement: 'whole', amount: 2 },
    {recipe_id: 4, ingredient_id: 5, unit_of_measurement: 'whole', amount: 0.25 },
    {recipe_id: 4, ingredient_id: 6, unit_of_measurement: 'Tablespoon', amount: 1},
    {recipe_id: 4, ingredient_id: 7, unit_of_measurement: 'Teaspoon', amount: 0.5 },
    {recipe_id: 4, ingredient_id: 8, unit_of_measurement: 'ml', amount: 850 }
  ]);
};
