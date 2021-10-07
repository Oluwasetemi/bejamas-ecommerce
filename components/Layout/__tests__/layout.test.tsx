import { render, screen } from '@testing-library/react';
import Layout from '../index';

describe('Layout Component', () => {
	it('should render the component', async () => {
		render(
			<Layout>
				<h1>Layout Component</h1>
			</Layout>,
		);

		// test nav is present
		expect(screen.getByRole('navigation')).toBeInTheDocument();
		// test main tag has class main
		expect(screen.getByRole('main')).toBeInTheDocument();
		// test children is rendered
		expect(screen.getByRole('heading')).toHaveTextContent('Layout Component');
	});
});
