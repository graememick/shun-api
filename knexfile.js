require("dotenv").config();

module.exports = {
	client: 'postgresql',
	connection: process.env.DATABASE_URL || {
		host: process.env.DB_HOST || "127.0.0.1",
		port: process.env.DB_PORT || 5432,
		database: process.env.DB_NAME || "seasonal_cookbook",
		user: process.env.DB_USER || "grambo",
		password: process.env.DB_PASSWORD 
	},
	migrations: {
		directory: __dirname + "/db/migrations"
	},
	seeds: {
		directory: __dirname + "/db/seeds"
	}
}