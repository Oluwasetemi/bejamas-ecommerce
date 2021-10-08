import { useQuery } from '@apollo/client';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { AllProduct, Featured } from '../components/Products';
import type { ProductType } from '../components/Products/OneProduct';
import SEO from '../components/SEO';
import { perPage } from '../config';
import usePriceRange from '../hooks/usePriceRange';
import { categories } from '../utils/constant';
import { FEATURED_PRODUCT } from '../utils/queries/query';

const Home: NextPage = () => {
	const router = useRouter();
	let { page = 1 } = router.query;

	const [cat, setCat] = React.useState<string[]>(categories);
	const [priceLower, priceUpper, priceRange, setPriceRange] = usePriceRange();
	const [stateProduct, setProduct] = React.useState<ProductType[]>([]);

	const { data, loading, error } = useQuery(FEATURED_PRODUCT, {
		variables: {
			offset: Number(page) * perPage - perPage,
			limit: perPage,
			cat: cat,
			priceLower: priceLower,
			priceUpper: priceUpper,
		},
	});

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
