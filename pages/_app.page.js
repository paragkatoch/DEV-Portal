import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>DEV-Portal</title>

				<meta charset="utf-8" />
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

				<meta
					property="og:image"
					content="https://dev-portal.vercel.app/logo192.png"
					key="image"
				/>
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
