import styled from '@emotion/styled';
import React from 'react';
import { ProductType } from './OneProduct';

const SortStyles = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		height: 12px;
		width: 12px;
	}

	select {
		border: 0;
		margin-left: 10px;
		background: var(--bg);
		text-transform: capitalize;
	}

	select:focus {
		outline: none;
	}

	span {
		margin-left: 10px;
		color: var(--secondaryText);
	}
`;

type SortProp = {
	setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
	products: ProductType[];
};

function sortData(
	data: ProductType[],
	sortKey: string,
	sortingDirection: string,
) {
	// console.log(data, sortKey, sortingDirection);
	// create a clean copy
	let newCopy = data.slice(0);

	newCopy.sort((productA: ProductType, productB: ProductType) => {
		// @ts-ignore
		let sortConditionA = productA[sortKey];

		// @ts-ignore
		let sortConditionB = productB[sortKey];

		if (sortingDirection === 'ASC') {
			if (sortConditionA < sortConditionB) return -1;
			if (sortConditionA > sortConditionB) return 1;
			return 0;
		} else {
			if (sortConditionA > sortConditionB) return -1;
			if (sortConditionA < sortConditionB) return 1;
			return 0;
		}
	});

	return newCopy;
}

export default function Sort({ setProducts, products }: SortProp) {
	const [sortBy, setSortBy] = React.useState('price');
	const [sort, setSort] = React.useState('ASC');
	return (
		<SortStyles data-testid="sort">
			<img
				src="./sort.svg"
				loading="lazy"
				alt="sort"
				onClick={() => {
					if (sort === 'ASC') {
						setSort('DESC');
					} else {
						setSort('ASC');
					}

					products = sortData(products, sortBy, sort);
					setProducts(products);
				}}
			/>
			<span>Sort By</span>
			<select
				name="sortBy"
				id="sortBy"
				onChange={(e) =>
					setSortBy(e.target.value === 'alphabetically' ? 'name' : 'price')
				}
			>
				<option value="price">price</option>
				<option value="alphabetically">alphabetically</option>
			</select>
		</SortStyles>
	);
}
