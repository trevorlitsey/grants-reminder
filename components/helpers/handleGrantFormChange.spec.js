import { shallow } from 'enzyme';
import moment from 'moment';
import makeOnChangeEvent from './tests/makeOnChangeEvent';
import handleGrantFormChange from './handleGrantFormChange';

import { basicGrant } from '../../data/sampleGrants';

import AddGrantForm from '../AddGrantForm';

describe('handleGrantFormChange', () => {

	it('should handle name change and update state', () => {
		const instance = shallowrenderAddGrantForm().instance();

		const grantName = 'what a great name!';
		const nameEvent = makeOnChangeEvent('name', grantName);

		instance.handleGrantFormChange(nameEvent)
		expect(instance.state.grant.name).toEqual(nameEvent.target.value);
	})

	it('should handle notes change and update state', () => {
		const instance = shallowrenderAddGrantForm().instance();
		const notes = 'what a SET of notes!';
		const notesEvent = makeOnChangeEvent('notes', notes);

		instance.handleGrantFormChange(notesEvent)
		expect(instance.state.grant.notes).toEqual(notes);
	})

	it('should handle month change and update state', () => {
		const instance = shallowrenderAddGrantForm().instance();
		const monthEvent = makeOnChangeEvent('month', 10);

		// month
		instance.handleGrantFormChange(monthEvent)
		const monthInState = instance.state.grant.date.format('MM');
		const expectedMonth = moment(basicGrant.date).clone().set({ month: monthEvent.target.value }).format('MM');
		expect(monthInState).toEqual(expectedMonth)
	})

	it('should handle day change and update state', () => {
		const instance = shallowrenderAddGrantForm().instance();
		const dateEvent = makeOnChangeEvent('date', 15);

		// day
		instance.handleGrantFormChange(dateEvent)
		const DateInState = instance.state.grant.date.format('DD');
		const expectedDate = moment(basicGrant.date).clone().set({ date: dateEvent.target.value }).format('DD');
		expect(DateInState).toEqual(expectedDate)
	})

	it('should handle year change and update state', () => {
		const instance = shallowrenderAddGrantForm().instance();
		const yearEvent = makeOnChangeEvent('year', 2018);

		// year
		instance.handleGrantFormChange(yearEvent)
		const YearInState = instance.state.grant.date.format('YYYY');
		const expectedYear = moment(basicGrant.date).clone().set({ year: yearEvent.target.value }).format('YYYY');
		expect(YearInState).toEqual(expectedYear)
	})

	it('should handle purpose change and update state', () => {
		const instance = shallowrenderAddGrantForm().instance();
		const purposeEvent = makeOnChangeEvent('purpose', 'a very worthwhile purpose');

		instance.handleGrantFormChange(purposeEvent)
		expect(instance.state.grant.purpose).toEqual(purposeEvent.target.value);
	})

	it('should handle reminder change and update state', () => {
		const instance = shallowrenderAddGrantForm().instance();
		const beforeState = instance.state.grant.reminders.twoWeeks;
		const reminderEvent = makeOnChangeEvent('reminders', 'twoWeeks');

		instance.handleGrantFormChange(reminderEvent)
		expect(instance.state.grant.reminders.twoWeeks).toEqual(!beforeState);
	})

})

function shallowrenderAddGrantForm(props = {}) {
	const propsToUser = {
		purposes: {
			one: 'General Operations',
			two: 'Education',
			three: 'Special Projects',
		},
		addNewGrant: () => { },
		...props
	}
	return shallow(<AddGrantForm {...propsToUser} />)
}