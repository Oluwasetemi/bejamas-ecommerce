import styled from '@emotion/styled';
import useWindowSize from 'hooks/useWindowSize';
import React from 'react';
import formatMoney from 'utils/formatMoney';
import { useCart } from '../components/LocalState';
import { ProductCartProp } from './Products/Featured';

type CartStyleProp = {
	open: boolean;
	mobile: boolean;
};

const CartStyles = styled.div<CartStyleProp>`
	margin-top: 103px;
	margin-right: 50px;
	padding: 10px 30px;
	position: relative;
	background: white;
	position: fixed;
	height: 40%;
	top: 0;
	right: 0;
	width: 30%;
	min-width: 430px;
	${(props) => props.mobile && `min-width: 230px;`}
	bottom: 0;
	transform: translateX(150%);
	transition: all 0.3s;
	box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
	z-index: 5;
	display: grid;
	grid-template-rows: auto 1fr auto;
	overflow: scroll;

	${(props) => props.open && `transform: translateX(0);`}

	header {
		margin-bottom: 0.05em;
		text-align: right;
		font-size: 17px;
		cursor: pointer;
	}
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		overflow: auto;
	}
	button {
		width: 100%;
		background: white;
		color: black;
		padding: 0.5em;
	}
`;

function Cart() {
	const { width } = useWindowSize();
	let isMobile = width < 768;
	const all = useCart();
	const toggleCart = all?.toggleCart;
	const cartOpen = all?.cartOpen;
	const cart = all?.cart;

	return (
		// @ts-ignore
		<CartStyles open={cartOpen} mobile={isMobile} data-testid="cart">
			<div>
				<header tabIndex={1}>
					<div tabIndex={-1} onClick={toggleCart} title="close">
						X
					</div>
				</header>
				<ul tabIndex={1}>
					{cart && cart?.length > 0 ? (
						cart.map((cartItem, index) => (
							<CartItem key={index} cartItem={cartItem} />
						))
					) : (
						<p>No Item</p>
					)}
				</ul>
				<hr />
				<button className="clear" onClick={() => all?.setCart([])}>
					CLEAR
				</button>
			</div>
		</CartStyles>
	);
}

const CartItemStyles = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	.left {
		h3 {
			margin-top: 5px;
			margin-bottom: 5px;
		}
	}
	.right {
		img {
			object-fit: cover;
		}
	}
`;

function CartItem({ cartItem }: { cartItem: ProductCartProp }) {
	return (
		<CartItemStyles>
			<div className="left">
				<h3>{cartItem.name}</h3>
				<p>{formatMoney(cartItem.price)}</p>
			</div>
			<div className="right">
				<img
					width={160}
					height={80}
					src={cartItem.image}
					alt={cartItem.name}
					loading="lazy"
				/>
			</div>
		</CartItemStyles>
	);
}

export default Cart;
