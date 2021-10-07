import { MockedProvider } from '@apollo/react-testing';
import { render } from '@testing-library/react';
import Home from '../index';

jest.mock('next/router', () => ({
	useRouter() {
		return {
			route: '/',
			pathname: '',
			query: { page: 1 },
			asPath: '',
		};
	},
	push: jest.fn(),
}));

describe('Home Page', () => {
	it('should render the page component', async () => {
		render(
			<MockedProvider>
				<Home />
			</MockedProvider>,
		);

		// test nav is present
		// expect(screen.getByRole('navigation')).toBeInTheDocument();
		// test main tag has class main
		// expect(screen.getByRole('main')).toBeInTheDocument();
		// test children is rendered
		// expect(screen.getByRole('heading')).toHaveTextContent('Layout Component');
	});
});
