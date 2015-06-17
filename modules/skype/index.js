var Sequelize = require('sequelize');

function Skype () {
	this.connectToDb();
}

Skype.prototype.connectToDb = function() {
	var dbPath = '/home/foysal/.Skype/foysal01913881318/main.db';

	var sequelize = new Sequelize('main.db', null, null, {
		dialect: 'sqlite',

		pool: {
			max: 5,
			min: 0,
			idle: 10000
		},

		// SQLite only
		storage: dbPath
	});

	this.db = sequelize;
};

Skype.prototype.getContacts = function() {
	this.usersTable = this.db.define('Contacts', {
		skypename: Sequelize.STRING,
		fullname: Sequelize.STRING,
	}, {
		tableName: 'Contacts',
		timestamps: false
	});

	return this.usersTable.findAll();
};

module.exports = Skype;