describe('Loads the product', () => {
	const user = cy;
	beforeEach(() => {
		// Cypress starts out with a blank slate for each test
		// so we must tell it to visit our website with the `cy.visit()` command.
		// Since we want to visit the same URL at the start of all our tests,
		// we include it in our beforeEach function so that it runs before each test
		// @ts-ignore
		user.visit(`${Cypress.config().baseUrl}`);
	});
	it('should load data and render the product', () => {
		user
			.findByTestId(/products/i)
			.children()
			.should('have.length', 6);
	});
	// cart
	it('should have cart with 0 values', () => {
		user
			.findByRole('navigation')
			.findByTestId(/cart count/)
			.should('have.text', '0');
	});
	// cart should not be visible
	it('should have cart not visible', () => {
		user.findByRole('navigation').findByTestId('cart').should('not.be.visible');
	});
	it('should have cart visible when you click the cart in the navigation', () => {
		user.findByRole('img', { name: 'cart' }).click();
		user.findByTestId('cart').should('be.visible');
	});
	// click and add a product from featured product  to cart
	it('should add product to cart when you click the add to cart button from the featured product', () => {
		user
			.findByTestId(/featured/i)
			.wait(200)
			.findByText(/add to cart/i)
			.click({ force: true });
		user
			.findByRole('navigation')
			.findByTestId(/cart count/)
			.should('have.text', '1');
	});
	// click and add a product from product list to cart
	it('should add product to cart when you click the add to cart button from the product list', () => {
		user
			.findByTestId(/products/i)
			.children()
			.each(($el) => {
				$el.find('.button').trigger('click');
			});
		user
			.findByRole('navigation')
			.findByTestId(/cart count/)
			.should('have.text', '6');
	});
	// should load the featured product
	it('should load a featured product', () => {
		user
			.findByTestId(/featured/i)
			.findByTitle(/featured/i)
			.should('exist');
		user
			.findByTestId(/featured/i)
			.findByRole('banner')
			.findByRole('img')
			.should('have.attr', 'src');
		user
			.findByTestId(/featured/i)
			.findByTitle(/more-details/i)
			.should('exist');
	});

	// the hasura graphql endpoint
	// pagination
	// filter
	it('should filter product based on the category - people', () => {
		user.findAllByLabelText('people').click();
		user.findAllByLabelText('people').should('not.be.checked');
		user
			.findByTestId(/products/i)
			.children()
			.each(($el) => {
				let each = $el.find('.category');
				user.wrap(each).should('not.have.text', 'people');
			});
	});
	it('should filter product based on the category - pets', () => {
		user.findAllByLabelText('pets').click();
		user.findAllByLabelText('pets').should('not.be.checked');
		user
			.findByTestId(/products/i)
			.children()
			.each(($el) => {
				let each = $el.find('.category');
				user.wrap(each).should('not.have.text', 'pets');
			});
	});
	it('should filter product based on the category - food', () => {
		user.findAllByLabelText('food').click();
		user.findAllByLabelText('food').should('not.be.checked');
		user
			.findByTestId(/products/i)
			.children()
			.each(($el) => {
				let each = $el.find('.category');
				user.wrap(each).should('not.have.text', 'food');
			});
	});
	it('should filter product based on the category - premium', () => {
		user.findAllByLabelText('premium').click();
		user.findAllByLabelText('premium').should('not.be.checked');
		user
			.findByTestId(/products/i)
			.children()
			.each(($el) => {
				let each = $el.find('.category');
				user.wrap(each).should('not.have.text', 'premium');
			});
	});
	it('should filter product based on the category - landmarks', () => {
		user.findAllByLabelText('landmarks').click();
		user.findAllByLabelText('landmarks').should('not.be.checked');
		user
			.findByTestId(/products/i)
			.children()
			.each(($el) => {
				let each = $el.find('.category');
				user.wrap(each).should('not.have.text', 'landmarks');
			});
	});
	it('should filter product based on the category - cities', () => {
		user.findAllByLabelText('cities').click();
		user.findAllByLabelText('cities').should('not.be.checked');
		user
			.findByTestId(/products/i)
			.children()
			.each(($el) => {
				let each = $el.find('.category');
				user.wrap(each).should('not.have.text', 'cities');
			});
	});
	it('should filter product based on the category - nature', () => {
		user.findAllByLabelText('nature').click();
		user.findAllByLabelText('nature').should('not.be.checked');
		user
			.findByTestId(/products/i)
			.children()
			.each(($el) => {
				let each = $el.find('.category');
				user.wrap(each).should('not.have.text', 'nature');
			});
	});
	// sort
	it('should sort product based on the price', async () => {
		// let productListBeforeSort = [];
		// user
		// 	.findByTestId(/products/i)
		// 	.findAllByTitle(/product/i)
		// 	.each(($el) => productListBeforeSort.push($el));

		// console.log(productListBeforeSort);

		user.findByTestId(/sort/i).findByRole('img', { name: /sort/i }).click();

		// let productListAfterSort = user
		// 	.findByTestId(/products/i)
		// 	.findAllByTitle(/product/i);
	});

	it('should sort product based on the name', () => {
		user.findByTestId(/sort/i).findByRole('img', { name: /sort/i });
	});
	// mobile view specifics
});
