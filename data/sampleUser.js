const sampleGrants = require('./sampleGrants');

const { twoMonths, oneMonth } = sampleGrants

const sampleUser = {
	'email': 'trevorlitsey@gmail.com',
	'purposes': {
		'one': 'purpose1!',
		'two': 'purpose2!',
		'three': 'purpose3!',
	},
	'grants': {
		oneMonth,
		twoMonths,
		'jeesc9a9': {
			'date': 1523030464444,
			'id': 'jeesc9a9',
			'name': 'a grant due in june!',
			'notes': 'so many notes',
			'purpose': 'General Operations',
			'reminders': {
				'oneMonth': false,
				'oneWeek': true,
				'twoMonths': false,
				'twoWeeks': false
			}
		},
		'jeesm1xk': {
			'date': 1552338664444,
			'id': 'jeesm1xk',
			'name': 'yep',
			'notes': 'notes!!',
			'purpose': 'Education',
			'reminders': {
				'oneMonth': false,
				'oneWeek': false,
				'twoMonths': true,
				'twoWeeks': false
			}
		},
		'jek5wems': {
			'date': 1662737764444,
			'id': 'jek5wems',
			'name': 'a great name',
			'notes': 'these are incredible notes!',
			'purpose': 'General Operations',
			'reminders': {
				'oneMonth': false,
				'oneWeek': false,
				'twoMonths': false,
				'twoWeeks': false
			}
		}
	}
}

module.exports = sampleUser;
