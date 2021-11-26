import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						rel="apple-touch-icon"
						href={`${process.env.PUBLIC_URL}/logo192.png`}
					/>
					<link
						rel="manifest"
						href={`${process.env.PUBLIC_URL}/manifest.json`}
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Gabriela&family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
						rel="stylesheet"
					/>
					<link
						rel="icon"
						href={`${process.env.PUBLIC_URL}/favicon.ico`}
						type="image/x-icon"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
