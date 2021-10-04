import styled from '@emotion/styled';
import useWindowSize from 'hooks/useWindowSize';
import React from 'react';

export function isChecked(value: string, from: Array<unknown>) {
	return from.includes(value);
}

type FilterStyleProp = {
	mobile?: boolean;
};

const FilterStyles = styled.div<FilterStyleProp>`
	padding: 0.5em;
	padding-top: 0;
	padding-left: 0;
	padding-right: 100px;
	${(props) => props.mobile && `padding-right: 10px;`}
	.category,
	.price-range {
		display: flex;
		flex-direction: column;
		label:first-of-type {
			margin-top: 28px;
			${(props) => props.mobile && `margin-top: 5px`}
		}
		label {
			text-transform: capitalize;
			margin-bottom: 35px;
			${(props) => props.mobile && `margin-bottom: 5px;`}
		}
		input {
			margin-right: 20px;
		}
	}

	h2:first-of-type {
		margin-top: -5px;
		${(props) => props.mobile && `margin-bottom: 0px;`}
	}
	h2 {
		margin-top: 28px;
		${(props) => props.mobile && `margin-top: 5px;`}
		${(props) => props.mobile && `margin-bottom: 0px;`}
	}
	hr {
		width: 268px;
	}
`;
const categoryFilter = [
	'people',
	'premium',
	'pets',
	'food',
	'landmarks',
	'cities',
	'nature',
];

const priceRangeFilter = [
	'less than $20',
	'$20-$100',
	'$100-$200',
	'more than $200',
];

type FilterProp = {
	cat: string[];
	setCat: React.Dispatch<React.SetStateAction<string[]>>;
	priceRange: string;
	setPriceRange: React.Dispatch<React.SetStateAction<string>>;
};

export default function Filter({
	cat,
	setCat,
	priceRange,
	setPriceRange,
}: FilterProp): JSX.Element {
	const { width } = useWindowSize();
	let isMobile = width < 768;

	const handleChangeCat = (event: React.ChangeEvent<HTMLInputElement>) => {
		const filter = event?.currentTarget?.name;

		if (isChecked(filter, cat)) {
			setCat((prev) => prev.filter((each) => each !== filter));
			return [];
		} else {
			setCat((prev) => {
				if (filter) {
					return [...prev, filter];
				}
				return [...prev];
			});
		}
	};

	const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
		let name = event.currentTarget.value;
		let checked = event.currentTarget.checked;
		if (checked === false) {
			setPriceRange('');
		} else {
			setPriceRange(name);
		}
	};
	return (
		<FilterStyles mobile={isMobile}>
			<h2>Category</h2>
			<div className="category">
				{categoryFilter.map((category, index) => {
					return (
						<label htmlFor={category} key={`${category}-${index}`}>
							<input
								onChange={handleChangeCat}
								type="checkbox"
								name={category}
								id={category}
								checked={isChecked(category, cat)}
							/>{' '}
							{category}
						</label>
					);
				})}
			</div>
			<hr />
			<h2>Price range</h2>
			<div className="price-range">
				{priceRangeFilter.map((category, index) => {
					return (
						<label htmlFor={category} key={`${category}-${index}`}>
							<input
								onChange={handleChangePrice}
								type="checkbox"
								name={category}
								value={category}
								id={category}
								checked={priceRange === category}
							/>{' '}
							{category}
						</label>
					);
				})}
			</div>
		</FilterStyles>
	);
}
