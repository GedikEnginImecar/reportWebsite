module.exports = {
	HOST: `localhost`,
	USER: `postgres`,
	PASSWORD: `root`,
	DB: `node_sequelize_api_db`,
	dialect: `postgres`,

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};
