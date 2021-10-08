import gql from 'graphql-tag';

export const FEATURED_PRODUCT = gql`
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
