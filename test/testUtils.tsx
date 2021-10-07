/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"
import { CartStateProvider } from '../components/LocalState';

const Providers = ({ children }: { children: React.ReactChildren }) => {
	// return children;
	// return (
	//   <ThemeProvider theme="light">
	//     <TranslationProvider messages={defaultStrings}>
	//       {children}
	//     </TranslationProvider>
	//   </ThemeProvider>
	// )
	// @ts-ignore
	return <CartStateProvider>{children}</CartStateProvider>;
};

const customRender = (ui: JSX.Element, options = {}) =>
	// @ts-ignore
	render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
