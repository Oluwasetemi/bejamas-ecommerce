import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { AllProduct, Featured } from '../components/Products';
import type { ProductType } from '../components/Products/OneProduct';
import SEO from '../components/SEO';
import { perPage } from '../config';

const FEATURED_PRODUCT = gql`
	query FEATURED_PRODUCT(
		$limit: Int
		$offset: Int
		$cat: [String]
		$priceUpper: Int
		$priceLower: Int
	) {
		featured: products(where: { featured: { _eq: true } }) {
			...productFragment
		}
		products: products(
			limit: $limit
			offset: $offset
			where: {
				category: { _in: $cat }
				price: { _lt: $priceLower, _gt: $priceUpper }
			}
		) {
			...productFragment
		}
		count: products_aggregate(
			where: {
				category: { _in: $cat }
				price: { _lt: $priceLower, _gt: $priceUpper }
			}
		) {
			aggregate {
				count
			}
		}
	}

	fragment productFragment on products {
		id
		name
		category
		featured
		bestseller
		price
		recommendations
		description
		size
		image {
			alt
			src
			width
			height
		}
	}
`;

const Home: NextPage = () => {
	const [cat, setCat] = React.useState<string[]>([
		'people',
		'premium',
		'pets',
		'food',
		'landmarks',
		'cities',
		'nature',
	]);
	const [priceRange, setPriceRange] = React.useState<string>('');

	let priceLower: any;
	let priceUpper: any;

	if (priceRange === '') {
		priceLower = 20000000;
		priceUpper = 0;
	}
	if (priceRange === 'less than $20') {
		priceLower = 2000;
		priceUpper = 0;
	}
	if (priceRange === '$20-$100') {
		priceUpper = 2000;
		priceLower = 10000;
	}
	if (priceRange === '$100-$200') {
		priceUpper = 10000;
		priceLower = 20000;
	}

	if (priceRange === 'more than $200') {
		priceLower = 20000000;
		priceUpper = 20000;
	}

	const router = useRouter();
	let { page = 1 } = router.query;

	const { data, loading, error } = useQuery(FEATURED_PRODUCT, {
		variables: {
			offset: Number(page) * perPage - perPage,
			limit: perPage,
			cat: cat,
			priceLower: priceLower,
			priceUpper: priceUpper,
		},
	});
	const [stateProduct, setProduct] = React.useState<ProductType[]>([]);

	// sorting
	let products = data && data.products;
	let pages: number;
	React.useEffect(() => {
		if (page > pages) {
			router.push({
				pathname: '',
				query: { page: pages },
			});
		}
		setProduct(products);
	}, [products, page]);

	if (error) return <p data-testid="error">Error fetching data</p>;
	if (loading) return <p data-testid="loading">Loading...</p>;
	if (data.featured.length === 0) {
		return <p data-testid="empty">No featured product Found </p>;
	}

	const featuredProduct = data.featured[0];
	const count = data.count.aggregate.count;
	pages = Math.ceil(count / perPage);

	return (
		<div className="container">
			<SEO />

			<Featured product={featuredProduct} />
			<hr />
			{/* move and manage the props with context TODO: */}
			<AllProduct
				setProducts={setProduct}
				products={stateProduct}
				count={count}
				page={Number(page)}
				category={cat}
				setCategory={setCat}
				priceRange={priceRange}
				setPriceRange={setPriceRange}
			/>
		</div>
	);
};

export default Home;
