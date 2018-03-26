import React from 'react';
import { shallow } from 'enzyme';

import { grants, purposes } from '../data/sampleUser';

import GrantsTable from './GrantsTable';

describe('GrantsTable', () => {

	it('should render without crashing', () => {
		const wrapper = shallowRenderGrantsTable();
		expect(wrapper).toMatchSnapshot();
	})

})

function shallowRenderGrantsTable(props = {}) {
	const propsToUser = {
		grants,
		grantToEdit: 'jeesc9a9',
		updateGrantToEdit: () => { },
		updateGrant: () => { },
		changesPending: false,
		purposes,
		...props,
	}
	return shallow(<GrantsTable {...propsToUser} />);

}