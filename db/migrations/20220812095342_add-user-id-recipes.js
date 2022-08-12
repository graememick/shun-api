/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.alterTable("recipes", function(table) {
       table.uuid("user_id");
     })
   };
   
   /**
    * @param { import("knex").Knex } knex
    * @returns { Promise<void> }
    */
   exports.down = function(knex) {
       return knex.schema.alterTable("recipes", function(table) {
        table.dropColumn("user_id") 
       })
   };