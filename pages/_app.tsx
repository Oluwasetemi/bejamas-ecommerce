import {
	ApolloClient,
	ApolloLink,
	ApolloProvider,
	concat,
	HttpLink,
	InMemoryCache,
	NormalizedCacheObject,
} from '@apollo/client';
import { getDataFromTree } from '@apollo/react-ssr';
import withApollo from 'next-with-apollo';
import type { AppProps } from 'next/app';
import App from 'next/app';
import Layout from '../components/Layout';
import { CartStateProvider } from '../components/LocalState';
import { endpoint } from '../config';

// import withData from '../utils/withData';

const httpLink = new HttpLink({
	uri: endpoint,
});

const authMiddleware = new ApolloLink((operation, forward) => {
	// add the authorization to the headers
	operation.setContext(({ headers = {} }) => ({
		headers: {
			...headers,
			'x-hasura-admin-secret':
				'f0PKTGi7DwE3MxFS5HhbR12c4Qkv1eRalhxoqoNYylDv3D7HwHuLYPb8ZigMqOHX',
		},
	}));

	return forward(operation);
});

function MyApp({
	Component,
	pageProps,
	apollo,
}: AppProps & { apollo: ApolloClient<NormalizedCacheObject> }) {
	return (
		<ApolloProvider client={apollo}>
			{/* @ts-ignore */}
			<CartStateProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</CartStateProvider>
		</ApolloProvider>
	);
}

MyApp.getInitialProps = async (appContext: any) => {
	const appProps = await App.getInitialProps(appContext);
	return { ...appProps };
};

export default withApollo(
	({ initialState }) => {
		return new ApolloClient({
			link: concat(authMiddleware, httpLink),
			connectToDevTools: true,
			ssrMode: true,
			cache: new InMemoryCache().restore(initialState || {}),
		});
	},
	{ getDataFromTree },
)(MyApp);
