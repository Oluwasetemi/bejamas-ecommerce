import { render } from '@testing-library/react';
import { OneProduct } from '..';
import { product } from './Featured.test';

/* eslint-disable jest/no-disabled-tests */
describe('OneProduct Component', () => {
	it('should render the component', () => {
		render(<OneProduct product={product} />);
	});
});

export {};
