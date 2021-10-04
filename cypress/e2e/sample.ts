describe('Sample end to end test', () => {
	const user = cy;
	beforeEach(() => {
		// Cypress starts out with a blank slate for each test
		// so we must tell it to visit our website with the `cy.visit()` command.
		// Since we want to visit the same URL at the start of all our tests,
		// we include it in our beforeEach function so that it runs before each test
		user.visit(`${Cypress.config().baseUrl}`);
	});
	it('our app load correctly', () => {
		user.findByText(/hello/i).should('have.text', 'Hello');
	});
});

export {};
