import { render } from '@testing-library/react';
import Filter from '../Filter';

/* eslint-disable jest/no-disabled-tests */
describe('Filter Component', () => {
	it('should render the component', () => {
		render(
			<Filter
				cat={['home', 'landmarks']}
				priceRange="price"
				setCat={jest.fn()}
				setPriceRange={jest.fn()}
			/>,
		);
	});
});
