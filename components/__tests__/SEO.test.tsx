import { render } from '@testing-library/react';
import SEO from '../SEO';

/* eslint-disable jest/no-disabled-tests */
describe('SEO Component', () => {
	it('should render the component', () => {
		render(<SEO />);
	});
});

export {};
