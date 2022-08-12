class Ingredients {
    constructor() {
        this.db = require("../db/knex");
    };

    async getAll () {
        try {
            return await this.db("ingredients")
            .select("*")
            .timeout(1500);
        } catch (err){
            return err;
        }
    };

    async findOne (name){
        try {
            return await this.db("ingredients")
            .select("*")
            .where("name", name)
            .timeout(1500);
        } catch (err) {
            return err;
        }
    };

//     async create(name) {
//         try {
//             await this.db("ingredients")
//             .insert({
//                name
//             })
//             .timeout(1500);
//         return "Created new ingredient!"

//     } catch (err){
//         return err;
//     }
// };

// async update(name, edits){
//     try {
//         await this.db("ingredients")
//         .where("name", name)
//         .update(edits)
//         .timeout(1500);
//     return "Updated user!"

// } catch (err){
//     return err;
// }
// };

// async delete(name){
//     try {
//         await this.db("ingredients")
//         .where("name", name)
//         .del()
//         .timeout(1500);
//     return "Deleted user!"

// } catch (err){
//     return err;
// }
// };

}

module.exports = new Ingredients();