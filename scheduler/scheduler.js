const firebase = require('firebase');
const schedule = require('node-schedule');
const filterUserGrants = require('./filterUserGrants');
const sendEmail = require('./sendEmail');
const moment = require('moment');

const config = {
	apiKey: "AIzaSyB6hkXah0dRC2gP1_P2STtk1_go5PLeyjA",
	authDomain: "grants-reminder.firebaseapp.com",
	databaseURL: "https://grants-reminder.firebaseio.com",
	projectId: "grants-reminder",
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

const fetchAllUsers = async () => {
	try {
		const grants = await firebase.database().ref().once('value')
		return grants.val();
	}
	catch (err) {
		console.error(err);
	}
}

var j = schedule.scheduleJob({ hour: 8, minute: 0 }, async () => {
	console.log(`sending some emails at ${moment().format()}`);

	try {
		const allUsers = await fetchAllUsers();
		Object.keys(allUsers).forEach(key => {
			const user = allUsers[key];
			const today = process.env.NODE_ENV !== 'production' ? moment(1520402400000) : moment(); // march 7, 2018
			const filteredUser = filterUserGrants(user, today);
			if (filteredUser.grants.length > 0) {
				sendEmail(filteredUser);
			}
		})
	}
	catch (err) {
		console.error(err);
	}
});



