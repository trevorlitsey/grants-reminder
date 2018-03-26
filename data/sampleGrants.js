import moment from 'moment';

const blankGrant = {
	id: 'blankGrant',
	date: moment(),
	name: '',
	purpose: '',
	notes: '',
	reminders: {
		twoMonths: false,
		oneMonth: false,
		twoWeeks: false,
		oneWeek: false,
	},
}

const basicGrant = {
	id: 'basicGrant',
	date: 1521592644420,
	name: 'a grant name',
	notes: '',
	purpose: 'general operations',
	reminders: {
		twoMonths: true,
		oneMonth: false,
		twoWeeks: true,
		oneWeek: false,
	},
}

const twoMonths = {
	id: 'twoMonths',
	name: 'NEA',
	date: 1525669200000,
	notes: '',
	purpose: 'general operations',
	reminders: {
		twoMonths: true,
		oneMonth: false,
		twoWeeks: false,
		oneWeek: false,
	}
}

const oneMonth = {
	id: 'oneMonth',
	notes: '',
	purpose: 'general operations',
	name: 'Ditmas',
	date: 1523077200000,
	reminders: {
		twoMonths: false,
		oneMonth: true,
		twoWeeks: false,
		oneWeek: true,
	}
}

const twoWeeks = {
	id: 'twoWeeks',
	notes: '',
	purpose: 'general operations',
	name: 'Aaron Copland',
	date: 1521608400000,
	reminders: {
		twoMonths: false,
		oneMonth: false,
		twoWeeks: true,
		oneWeek: false,
	}
}

const oneWeek = {
	id: 'oneWeek',
	notes: '',
	purpose: 'general operations',
	name: 'Koussevitzky',
	date: 1521003600000,
	reminders: {
		twoMonths: false,
		oneMonth: false,
		twoWeeks: false,
		oneWeek: true,
	}
}

const thisDay = {
	id: 'thisDay',
	notes: '',
	purpose: 'general operations',
	name: 'NMUSA',
	date: 1520402400000,
	reminders: {
		twoMonths: false,
		oneMonth: false,
		twoWeeks: false,
		oneWeek: false,
	}
}

const noDay = {
	id: 'noDay',
	notes: '',
	purpose: 'general operations',
	name: 'decoy',
	date: 1576452400000,
	reminders: {
		twoMonths: true,
		oneMonth: true,
		twoWeeks: true,
		oneWeek: true,
	}
}

const sampleGrants = {
	blankGrant,
	basicGrant,
	twoMonths,
	oneMonth,
	twoWeeks,
	oneWeek,
	thisDay,
	noDay
}

module.exports = sampleGrants;