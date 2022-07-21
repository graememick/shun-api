/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
 return knex.schema.alterTable("recipes", function(table) {
    table.dropForeign("user_id");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable("recipes", function(table) {
        table.integer("user_id").notNullable();
        table.foreign("user_id").references('id').inTable('users'); 
    })
};
