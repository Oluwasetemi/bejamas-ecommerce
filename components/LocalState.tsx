import React, { useContext, useState } from 'react';
import type { ProductCartProp } from '../components/Products/Featured';

interface AppContextInterface {
	cart: ProductCartProp[];
	setCart: React.Dispatch<React.SetStateAction<ProductCartProp[]>>;
	cartOpen: boolean;
	toggleCart: () => void;
	openCart: () => void;
	closeCart: () => void;
}

let LocalStateContext = React.createContext<AppContextInterface | null>(null);
// console.log(LocalStateContext);
// const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({
	// @ts-ignore
	children,
}: React.ReactElement | React.ReactElement[]) {
	const [cartOpen, setCartOpen] = useState(false);
	const [cart, setCart] = React.useState<ProductCartProp[]>([]);

	function toggleCart() {
		setCartOpen(!cartOpen);
	}

	function closeCart() {
		setCartOpen(false);
	}

	function openCart() {
		setCartOpen(true);
	}

	const defaultValue = {
		cartOpen,
		toggleCart,
		openCart,
		closeCart,
		cart,
		setCart,
	};
	return (
		<LocalStateContext.Provider value={defaultValue}>
			{children}
		</LocalStateContext.Provider>
	);
}

function useCart() {
	const all = useContext(LocalStateContext);
	return all;
}

export { CartStateProvider, LocalStateContext, useCart };
