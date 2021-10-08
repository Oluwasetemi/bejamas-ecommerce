import React from 'react';

type usePriceRangeType = [
	priceLower: number,
	priceUpper: number,
	priceRange: string,
	setPriceRange: React.Dispatch<React.SetStateAction<string>>,
];

export default function usePriceRange(): usePriceRangeType {
	const [priceRange, setPriceRange] = React.useState<string>('');

	let priceLower = 20000000;
	let priceUpper = 0;

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

	return [priceLower, priceUpper, priceRange, setPriceRange];
}
