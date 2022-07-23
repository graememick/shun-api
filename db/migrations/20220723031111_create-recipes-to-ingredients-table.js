/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema
    .createTable("recipes_to_ingredients", function (table) {
      table.integer("recipe_id")
      table
      .foreign("recipe_id").references('id').inTable('recipes'); 
      table.integer("ingredient_id")
      table
      .foreign("ingredient_id").references('id').inTable('ingredients'); 
      table.string("unit_of_measurement", 255)
        .notNullable()
      table.decimal("amount")
    });};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.schema.dropTable("ingredients");
};