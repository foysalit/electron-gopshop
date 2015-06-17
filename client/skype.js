const Skype = require('./modules/skype/index');
const _ = require('lodash');
const Vue = require('vue');

window.onload = function () {
	var vueContacts = new Vue({
		el: '#contacts',
		data: {
			items: []
		}
	});

	var skype = new Skype();

	skype.getContacts().then(function (contacts) {
		// vueContacts.items = _.pluck(contacts, 'dataValues');
		vueContacts.items = contacts;
	});
}