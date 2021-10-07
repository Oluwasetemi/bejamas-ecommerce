import { render } from '../../test/testUtils';

const cartOpen = false;
const defaultValue = {
	cartOpen: cartOpen,
	toggleCart: !cartOpen,
	openCart: jest.fn(),
	closeCart: jest.fn(),
	cart: [],
	setCart: jest.fn(),
};

/* eslint-disable jest/no-disabled-tests */
describe('LocalState Component', () => {
	it('should ', () => {
		render(<h1>hey</h1>, { value: defaultValue });
	});
});

export {};
