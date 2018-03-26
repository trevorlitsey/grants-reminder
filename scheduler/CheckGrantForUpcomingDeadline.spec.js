const moment = require('moment');
const CheckGrantForUpcomingDeadline = require('./CheckGrantForUpcomingDeadline');
const sampleGrants = require('../data/sampleGrants');

const { twoMonths,
	oneMonth,
	twoWeeks,
	oneWeek,
	thisDay,
	noDay } = sampleGrants;

it('should return true if matched dealine found', () => {
	const today = moment(1520402400000); // March 7, 2018

	// two months
	const twoMonthFound = CheckGrantForUpcomingDeadline(twoMonths, today);
	expect(twoMonthFound).toBe(true);

	// one month
	const oneMonthFound = CheckGrantForUpcomingDeadline(oneMonth, today);
	expect(oneMonthFound).toBe(true);

	// two weeks
	const twoWeeksFound = CheckGrantForUpcomingDeadline(twoWeeks, today);
	expect(twoWeeksFound).toBe(true);

	// one week
	const oneWeekFound = CheckGrantForUpcomingDeadline(oneWeek, today);
	expect(oneWeekFound).toBe(true);

	// 2day
	const todayFound = CheckGrantForUpcomingDeadline(thisDay, today);
	expect(todayFound).toBe(true);

	// none
	const none = CheckGrantForUpcomingDeadline(noDay, today);
	expect(none).toBe(false);

})