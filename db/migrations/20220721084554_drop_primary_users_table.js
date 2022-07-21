/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .table("users", table => {
            table.dropPrimary()
            table.primary("email")
        })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .table("users", table => {
        table.dropPrimary()
        table.primary("id")
    })
};
