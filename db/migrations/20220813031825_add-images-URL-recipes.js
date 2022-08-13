/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.alterTable("recipes", function(table) {
       table.string("images_url");
     })
   };
   
   /**
    * @param { import("knex").Knex } knex
    * @returns { Promise<void> }
    */
   exports.down = function(knex) {
       return knex.schema.alterTable("recipes", function(table) {
        table.dropColumn("images_url") 
       })
   };