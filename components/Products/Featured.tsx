/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import useWindowSize from 'hooks/useWindowSize';
import Head from 'next/head';
import { Fragment } from 'react';
import { buttonStyles } from '../../styles/globalStyles';
import { useCart } from '../LocalState';
import type { ProductType } from './OneProduct';

const FeaturedStyles = styled.div`
	display: flex;
	flex-direction: column;
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		h3 {
			text-transform: capitalize;
			@media screen and (min-device-width: 320px) and (max-device-width: 768px) {
				font-size: 1.8rem;
				margin-top: 20px;
				margin-bottom: 25px;
			}
		}
	}
	button {
		${buttonStyles}/* width: 100%; */
	}
	h3 {
		margin-top: 1.65em;
		margin-bottom: 1.65em;
	}
	img {
	}
	.banner {
		position: relative;

		span.overlay {
			position: absolute;
			bottom: 3px;
			left: 0;
			background: var(--bg);
			color: #000000;
			padding: 0.5rem 2.5rem;
		}

		img {
			width: 100%;
			object-fit: cover;
			height: 550px;
		}
	}
	.more-details {
		h3 {
			text-transform: capitalize;
			margin-top: 1em;
			margin-bottom: 0.5em;
		}
	}

	.description-section {
		display: grid;
		grid-template-columns: 2fr 1fr;
		margin-bottom: 30px;
		/* Tablet */
		@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
			/* some */
		}

		/* phones */
		@media screen and (min-device-width: 320px) and (max-device-width: 768px) {
			grid-template-columns: 1fr;
		}
	}
`;

const SectionStyles = styled.section`
	text-align: right;
	margin-top: -75px;
	.people-buy {
		margin-bottom: 40px;
		img {
			object-fit: cover;
			width: 117px;
			height: 147px;
			margin-left: 20px;
		}
	}
	.details {
		margin-bottom: 50px;
		h5 {
			font-size: 20px;
			margin-top: 10px;
			margin-bottom: 10px;
		}
		span {
			display: block;
			margin-bottom: 10px;
		}
	}
	@media screen and (min-device-width: 320px) and (max-device-width: 768px) {
		margin-top: 15px;
		text-align: left;
		.people-buy {
			img {
				margin-left: 0px;
				margin-right: 10px;
			}
		}
		.details {
			margin-bottom: 20px;
		}
	}
`;

export type ProductCartProp = {
	name: string;
	price: number;
	image: string;
};

type AddToCartProp = {
	product: ProductCartProp;
	style?: any;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function AddToCart({ product, style }: AddToCartProp) {
	const all = useCart();
	let setCart = all?.setCart;
	// @ts-ignore
	const handleClick = () => setCart((prev) => [...prev, product]);
	return (
		<button onClick={handleClick} className="button" style={style}>
			Add to Cart
		</button>
	);
}

type FeaturedProp = {
	product: ProductType;
};

function Featured({ product }: FeaturedProp) {
	const { width } = useWindowSize();
	let isMobile = width < 768;
	let image = product.image || product.image;
	const cartDetails = {
		name: product.name,
		image: typeof image !== 'string' ? image.src : image,
		price: product.price,
	};

	return (
		<FeaturedStyles>
			<div className="header">
				<h3>{product.name}</h3>
				{product!.id && !isMobile && <AddToCart product={cartDetails} />}
			</div>
			<div className="banner">
				{typeof image !== 'string' ? (
					<Fragment>
						<img src={image.src} alt={image.alt} loading="lazy" />
						<Head>
							<link rel="preload" as="image" href={image.src} />
						</Head>
					</Fragment>
				) : (
					<img src={image} alt={product.name} loading="lazy" />
				)}
				<span className="overlay">Photo of the day</span>
			</div>
			<div className="add-to-cart">
				{product!.id && isMobile && (
					<AddToCart
						style={{ width: '100%', marginTop: '30px' }}
						product={cartDetails}
					/>
				)}
			</div>
			<div className="more-details">
				<h3>About the {product.name}</h3>
				<span>{product.category}</span>
				<div className="description-section">
					<article
						className="description"
						dangerouslySetInnerHTML={{ __html: product.description }}
					/>
					<SectionStyles>
						<div className="people-buy">
							<h4>People also buy</h4>
							<div className="recommendation-images">
								{product.recommendations.slice(0, 3).map((image, index) => (
									<Fragment key={`${image.alt}-${index}`}>
										<img src={image.src} alt={image.alt} loading="lazy" />
									</Fragment>
								))}
							</div>
						</div>
						<div className="details">
							<h5>Details</h5>
							<span>
								{typeof image !== 'string'
									? `Dimension: ${image.width} X ${image.height} pixel`
									: '--'}
							</span>
							<span>Size: {(product.size / 1000).toString()}MB</span>
						</div>
					</SectionStyles>
				</div>
			</div>
		</FeaturedStyles>
	);
}

export default Featured;
