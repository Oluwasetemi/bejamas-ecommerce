/* eslint-disable jest/no-disabled-tests */
import { render } from '@testing-library/react';
import { AllProduct } from '..';
import { ProductType } from '../OneProduct';
let fakeProduct: ProductType[] = [
	{
		id: 'xy123',
		name: 'Samurai King Resting',
		category: 'landmarks',
		bestseller: true,
		price: 101,
		currency: 'USD',
		image: {
			width: 1200,
			height: 700,
			src: '/featured.png',
			alt: 'featured samurai',
		},
		size: 15000,
		description:
			"<p>So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder</p><p> text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.</p> ",
		recommendations: [
			{
				src: 'https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
				alt: 'woman-slicing-gourd',
			},
			{
				src: 'https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
				alt: 'woman-leaning-back-on-tree-trunk-using-black-dslr-camera-during-day-610293/',
			},
			{
				src: 'https://images.pexels.com/photos/698170/pexels-photo-698170.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
				alt: 'white-and-black-laptop-computer-on-brown-wooden-stool-near-pile-books-698170',
			},
		],
	},
	{
		id: 'xy124',
		name: 'Samurai King Resting',
		category: 'home',
		bestseller: true,
		price: 101,
		currency: 'USD',
		image: {
			width: 1200,
			height: 700,
			src: '/featured.png',
			alt: 'featured samurai',
		},
		size: 15000,
		description:
			"<p>So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder</p><p> text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.</p> ",
		recommendations: [
			{
				src: 'https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
				alt: 'woman-slicing-gourd',
			},
			{
				src: 'https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
				alt: 'woman-leaning-back-on-tree-trunk-using-black-dslr-camera-during-day-610293/',
			},
			{
				src: 'https://images.pexels.com/photos/698170/pexels-photo-698170.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
				alt: 'white-and-black-laptop-computer-on-brown-wooden-stool-near-pile-books-698170',
			},
		],
	},
];

describe('Layout Component', () => {
	it('should render the component', async () => {
		// await delay(15000);

		render(
			<AllProduct
				products={fakeProduct}
				priceRange="priceRange"
				count={fakeProduct.length}
				page={1}
				category={['home', 'landmarks']}
				setCategory={jest.fn()}
				setPriceRange={jest.fn()}
				setProducts={jest.fn()}
			/>,
		);

		// test nav is present
		// expect(screen.getByRole('navigation')).toBeInTheDocument();
		// test main tag has class main
		// expect(screen.getByRole('main')).toBeInTheDocument();
		// test children is rendered
		// expect(screen.getByRole('heading')).toHaveTextContent('Layout Component');
	});
});

export { fakeProduct as products };
