import styled from '@emotion/styled';
import FocusTrap from 'focus-trap-react';
import React, { Fragment } from 'react';
import Cart from '../../components/Cart';
import { globalStyles } from '../../styles/globalStyles';
import { useCart } from '../LocalState';

const NavStyles = styled.nav`
	.nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
	}
	img[alt='logo'] {
		width: 150px;
		height: 25px;
		cursor: grab;
	}

	img[alt='cart'] {
		width: 54px;
		height: 54px;
		cursor: pointer;
	}

	.cart {
		position: relative;

		b {
			position: absolute;
			background: black;
			color: white;
			padding: 0.005em 0.25em;
			bottom: -10px;
			margin-left: -8px;
		}
	}
`;

function Nav() {
	const all = useCart();
	const cart = all?.cart;
	const toggleCart = all?.toggleCart;
	// const cartOpen = all?.cartOpen;

	return (
		<NavStyles>
			<div className="nav">
				<img src="./Group.svg" alt="logo" />
				<FocusTrap active={all?.cartOpen} focusTrapOptions={{}}>
					<div className="cart" onClick={toggleCart} tabIndex={4}>
						<img src="./shopping-cart.svg" alt="cart" />{' '}
						<b className="count ">{cart?.length}</b>
						<Cart />
					</div>
				</FocusTrap>
			</div>
			<hr />
		</NavStyles>
	);
}

type LayoutProps = {
	children: React.ReactElement | React.ReactElement[];
};

export default function Layout({ children }: LayoutProps) {
	return (
		<Fragment>
			{globalStyles}
			<Nav />
			<main className="main">{children}</main>
		</Fragment>
	);
}
