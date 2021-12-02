import Head from "next/head";

import DetailedPage from "@/components/DetailedPage";
import BasicFrame from "@/components/Layouts/BasicFrame";

import { DeveloperModules } from "@/utils/appData";

export default function FindHelp(props) {
	const data = DeveloperModules[2];
	return (
		<BasicFrame>
			<Head>
				<title>Find Help</title>
				<meta
					name="description"
					content="This portion of the Dev Portal contains in-depth information about the core subjects of your college degree and some perks of being a student."
				/>
			</Head>

			<DetailedPage {...data} />
		</BasicFrame>
	);
}
