import { render } from '@testing-library/react';
import Sort from '../Sort';
import { products } from './AllProduct.test';

/* eslint-disable jest/no-disabled-tests */
describe('Sort Component', () => {
	it('should render the component ', () => {
		render(<Sort products={products} setProducts={jest.fn()} />);
	});
});

export {};
