const moment = require('moment');

const CheckGrantForUpcomingDeadline = (grant, today = moment()) => {

	const format = 'YYYY-MM-DD'
	const twoMonthsFromToday = today.clone().add(2, 'months').format(format);
	const oneMonthFromToday = today.clone().add(1, 'month').format(format);
	const twoWeeksFromToday = today.clone().add(2, 'weeks').format(format);
	const oneWeekFromToday = today.clone().add(1, 'week').format(format);

	const dueDate = moment(grant.date).format(format);

	if (grant.reminders.twoMonths && twoMonthsFromToday === dueDate) {
		return true; // 2M
	} else if (grant.reminders.oneMonth && oneMonthFromToday === dueDate) {
		return true; // 1M
	} else if (grant.reminders.twoWeeks && twoWeeksFromToday === dueDate) {
		return true; // 2W
	} else if (grant.reminders.oneWeek && oneWeekFromToday === dueDate) {
		return true; // 1W
	} else if (today.format(format) === dueDate) {
		return true; // 2day
	}

	// no matching due dates
	return false;

}

module.exports = CheckGrantForUpcomingDeadline;