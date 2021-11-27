import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>DEV-Portal</title>

				<meta charSet="utf-8" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
				<meta name="theme-color" content="#ffffff"></meta>
				<meta
					name="description"
					content="The champions of mindset will be rewarded with glory. We have the best practices, tested, and proven handbooks spanning over multiple domains with elaborated roadmaps, resources, and workflows to minimize time spent on research without spending a dime."
				/>
				<meta
					httpEquiv="Content-Type"
					content="text/html; charset=utf-8"
					key="content-type"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
					key="viewport"
				/>

				<link rel="manifest" href={`${process.env.PUBLIC_URL}/manifest.json`} />
				<link
					rel="apple-touch-icon"
					sizes="57x57"
					href={`${process.env.PUBLIC_URL}/apple-icon-57x57.png`}
				/>
				<link
					rel="apple-touch-icon"
					sizes="60x60"
					href={`${process.env.PUBLIC_URL}/apple-icon-60x60.png`}
				/>
				<link
					rel="apple-touch-icon"
					sizes="72x72"
					href={`${process.env.PUBLIC_URL}/apple-icon-72x72.png`}
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href={`${process.env.PUBLIC_URL}/apple-icon-76x76.png`}
				/>
				<link
					rel="apple-touch-icon"
					sizes="114x114"
					href={`${process.env.PUBLIC_URL}/apple-icon-114x114.png`}
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href={`${process.env.PUBLIC_URL}/apple-icon-120x120.png`}
				/>
				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href={`${process.env.PUBLIC_URL}/apple-icon-144x144.png`}
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href={`${process.env.PUBLIC_URL}/apple-icon-152x152.png`}
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href={`${process.env.PUBLIC_URL}/apple-icon-180x180.png`}
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href={`${process.env.PUBLIC_URL}/android-icon-192x192.png`}
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href={`${process.env.PUBLIC_URL}/favicon-32x32.png`}
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="96x96"
					href={`${process.env.PUBLIC_URL}/favicon-96x96.png`}
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href={`${process.env.PUBLIC_URL}/favicon-16x16.png`}
				/>
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
