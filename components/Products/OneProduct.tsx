import styled from '@emotion/styled';
import React from 'react';
import { buttonStyles } from '../../styles/globalStyles';
import formatMoney from '../../utils/formatMoney';
import { AddToCart } from './Featured';

const OneProductStyles = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	margin-bottom: 37px;
	width: 100%;

	&:hover > .button {
		${buttonStyles}
		margin-top: -34px;
		display: block;
	}

	img {
		object-fit: cover;
		width: 286px;
		height: 380px;
	}

	.button {
		display: none;
	}

	h3 {
		margin-top: 2px;
		margin-bottom: 6px;
		text-transform: capitalize;
	}

	span {
		margin-top: 6px;
	}

	span:last-of-type {
		margin-top: 0;
	}

	span.best-seller {
		background: var(--bg);
		color: #000;
		margin-bottom: -25px;
		z-index: 0;
		margin-top: 0;
		width: 45%;
		text-align: center;
	}
`;

type Image = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
};

type ImageDimension = {
	width: number;
	height: number;
};

export type ProductType = {
	id: string;
	name: string;
	category: string;
	price: number;
	size: number;
	currency: string;
	image: Image | string;
	imageDimension?: ImageDimension;
	bestseller?: boolean;
	featured?: boolean;
	details?: string;
	description: string;
	recommendations: Array<Image>;
};

export default function OneProduct({ product }: { product: ProductType }) {
	// const { hover, onMouseEnter, onMouseLeave } = useHover();
	const image = (product.image && product.image) || product.image;

	const cartDetails = {
		name: product.name,
		image: typeof image !== 'string' ? image.src : image,
		price: product.price,
	};

	return (
		<OneProductStyles>
			{product.bestseller && <span className="best-seller">Best Seller</span>}
			{typeof image !== 'string' ? (
				<img src={image.src} alt={image.alt} loading="lazy" />
			) : (
				<img src={image} alt={product.name} loading="lazy" />
			)}
			<AddToCart product={cartDetails} />
			<span className="category" data-testid="category">
				{product.category}
			</span>
			<h3 title="product-title" className="name">
				{product.name}
			</h3>
			<span className="price">{formatMoney(product.price)}</span>
		</OneProductStyles>
	);
}
