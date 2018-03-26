const moment = require('moment');
const filterUserGrants = require('./filterUserGrants');
const sampleUser = require('../data/sampleUser');

it('should filter users grants that have upcoming deadlines', () => {
	const today = moment(1520402400000); // March 7, 2018
	const filteredUser = filterUserGrants(sampleUser, today);
	expect(filteredUser.grants.length).toEqual(2);
})

