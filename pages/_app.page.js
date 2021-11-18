import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>DEV-Portal</title>

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
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
