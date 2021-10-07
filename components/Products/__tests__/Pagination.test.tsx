import { render } from '@testing-library/react';
import Pagination from '../Pagination';

/* eslint-disable jest/no-disabled-tests */
describe('Pagination Component', () => {
	it('should render the component', () => {
		render(<Pagination count={6} page={1} />);
	});
});

export {};
