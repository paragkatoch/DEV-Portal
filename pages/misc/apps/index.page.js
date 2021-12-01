import Head from "next/head";
import DetailedPage from "../../../components/DetailedPage";
import BasicFrame from "../../../components/Layouts/BasicFrame";

import { MiscModules } from "../../../utils/appData";

export default function Apps() {
	const data = MiscModules[3];

	return (
		<BasicFrame>
			<Head>
				<title>Must have Apps</title>
				<meta
					name="description"
					content="Top-rated apps to help you on your technical journey to improve your skills, invest in yourself and take control of your life from your pocket."
				/>
			</Head>

			<DetailedPage {...data} />
		</BasicFrame>
	);
}
