import React from 'react';
import { shallow } from 'enzyme';

import { basicGrant, twoMonths, oneMonth } from '../data/sampleGrants';

import Index from './index'

describe('Index', () => {

	it('should successfully update grant to edit', () => {
		const instance = shallowRenderIndex().instance();
		const grantId = '2iuhkjh';
		instance.updateGrantToEdit(grantId)
		expect(instance.state.grantToEdit).toEqual(grantId)
	})

	it('should successfully add new grant', () => {
		const instance = shallowRenderIndex().instance();
		const db = {
			email: '',
			purposes: {},
			grants: { 
				twoMonths, 
				oneMonth
			},
		}
		
		instance.setState({ db })
		const newGrant = {
			...basicGrant,
			id: null
		}
		instance.addNewGrant(newGrant);
		// expect one more than before
		expect(Object.keys(instance.state.db.grants).length).toEqual(3);
	})

	it('should successfully update an existing grant', () => {
		const instance = shallowRenderIndex().instance();
		const grants = { twoMonths, oneMonth }
		instance.setState({ grants })
		const newGrantName = 'what a great new name';
		const updatedGrant = {
			...oneMonth,
			name: newGrantName,
		}
		const { id } = updatedGrant;
		instance.updateGrant(id, updatedGrant);
		expect(instance.state.db.grants[id].name).toEqual(newGrantName);
	})

	it('should successfully add a new purpose', () => {
		const instance = shallowRenderIndex().instance();

		const db = {
			grants: {},
			email: '',
			purposes: {
				one: 'wow!',
				two: 'check out this purpose!',
			}
		}
		instance.setState({ db });

		const newPurpose = 'what a great new purpose';
		instance.addNewPurpose(newPurpose);

		expect(Object.keys(instance.state.db.purposes).length).toEqual(3);
	})

	it('should successfully delete a purpose', () => {
		const instance = shallowRenderIndex().instance();

		const db = {
			email: '',
			grants: {},
			purposes: {
				one: 'wow!',
				two: 'check out this purpose!',
			}
		}
		instance.setState({ db });

		const id = 'one'
		instance.deletePurpose(id);

		// g'bye
		expect(instance.state.db.purposes[id]).toBeNull();
	})

	it('should successfully update users email', () => {
		const instance = shallowRenderIndex().instance();
		const db = {
			grants: {},
			purposes: {},
			email: 'test@test.com',
		}
		instance.setState({ db });
		const newEmail = 'litseyt@me.com';
		instance.updateEmail(newEmail);
		expect(instance.state.db.email).toEqual(newEmail);
	})

})

function shallowRenderIndex() {
	return shallow(<Index />);
}
