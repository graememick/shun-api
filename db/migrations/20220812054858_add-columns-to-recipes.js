/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema
    .alterTable("recipes", function(table){
    table.string("season", 32)
    table.string("intructions", 2000)
    table.string("ingredients-string", 1000)


    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable("users", function (table) {
        table.dropColumn("season");
        table.dropColumn("intructions");
        table.dropColumn("ingredients-string");
      })
    };