class Users {
    constructor() {
        this.db = require("../db/knex");
    };

    async findMany () {
        try {
            return await this.db("users")
            .select("*")
            .timeout(1500);
        } catch (err){
            return err;
        }
    };

    async findOne (username){
        try {
            return await this.db("users")
            .select("*")
            .where("username", username)
            .timeout(1500);
        } catch (err) {
            return err;
        }
    };

    async create(email, first_name, last_name, username) {
        try {
            await this.db("users")
            .insert({
                email: email,
                first_name: first_name,
                last_name: last_name,
                username: username
            })
            .timeout(1500);
        return "Created new user!"

    } catch (err){
        return err;
    }
};

async update(username, edits){
    try {
        await this.db("users")
        .where("username", username)
        .update(edits)
        .timeout(1500);
    return "Updated user!"

} catch (err){
    return err;
}
};

async delete(username){
    try {
        await this.db("users")
        .where("username", username)
        .del()
        .timeout(1500);
    return "Deleted user!"

} catch (err){
    return err;
}
};

}

module.exports = new Users();