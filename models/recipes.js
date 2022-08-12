class Recipes {
    constructor() {
        this.db = require("../db/knex");
    };

    getAll(limit = 100) {
        try {
            return this.db("recipes")
            .select("*")
            .limit(limit);
        } catch (err) {
            return err;
        }
       
      };

    async findOne (name){
        try {
            const recipe = await this.db("recipes")
            .select("*")
            .where("name", name)
            .first();
            
            const ingredients = await this.db("recipes_to_ingredients")
            .join("ingredients", "recipes_to_ingredients.ingredient_id", "=", "ingredients.id")
            .select({
                name: "ingredients.name",
                unit: "recipes_to_ingredients.unit_of_measurement",
                amount: "recipes_to_ingredients.amount"
            })
            .where("recipes_to_ingredients.recipe_id", recipe.id);
            
            return {...recipe, ingredients: ingredients}
        } catch (err) {
            return err;
        }
    };

}

module.exports = new Recipes();