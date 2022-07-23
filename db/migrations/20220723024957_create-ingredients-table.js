/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema
    .createTable("ingredients", function (table) {
      table.increments("id")
      table.string("name", 255)
        .notNullable()
        .index(); 
    });};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.schema.dropTable("ingredients");
};
