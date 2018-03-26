const moment = require('moment');
const CheckGrantForUpcomingDeadline = require('./CheckGrantForUpcomingDeadline');

// return filtered grants if found, else return false
const filterUserGrants = (user, today = moment()) => {

	const grants = [];

	Object.keys(user.grants).forEach(key => {

		const grant = user.grants[key];

		// push grant if deadline matached
		CheckGrantForUpcomingDeadline(grant, today) && grants.push(grant);

	});

	if (!grants) return false // no grants found

	grants.sort((a, b) => a.date - b.date); // quick sort

	const filteredUser = {
		email: user.email,
		grants
	}
	return filteredUser;

}

module.exports = filterUserGrants;