/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema
    .createTable("recipes", function (table) {
      table.increments("id").primary(); 
      table.integer("user_id").notNullable();
      table
        .foreign("user_id").references('id').inTable('users'); 
      table.string("name", 255)
        .notNullable()
        .index(); 
      table
        .string("description", 255)
        .notNullable()
      table
        .date("entry_created")
        .notNullable();
      table.date("entry_posted");
    });};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.schema.dropTable("recipes");
};
