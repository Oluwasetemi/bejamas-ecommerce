import Head from 'next/head';

export default function SEO() {
	return (
		<Head>
			<title>Bejamas_</title>
			<meta
				name="description"
				content="create a PoC of the e-commerce solution. One of our clients wants to have an application where he could sell images and artworks. He gave us designs and we need to transfer his vision to real code."
			/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
			/>
			<link
				rel="icon"
				href="https://bejamas.io/favicon-32x32.png"
				type="image/png"
			/>
			<link
				rel="preload"
				as="image"
				href="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
			/>

			<link rel="preconnect" href="https://images.pexels.com" />
			<link rel="dns-prefetch" href="https://images.pexels.com" />
		</Head>
	);
}
