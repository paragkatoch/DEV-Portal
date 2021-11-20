import Head from "next/head";

import BasicFrame from "../components/Layouts/BasicFrame";
import ModuleFrame from "../components/Layouts/ModuleFrame";
import { HomeModules } from "../utils/appData";

export default function Home() {
	return (
		<BasicFrame>
			<Head>
				<meta
					name="description"
					content="The champions of mindset will be rewarded with glory. We have the best practices, tested, and proven handbooks spanning over multiple domains with elaborated roadmaps, resources, and workflows to minimize time spent on research without spending a dime."
				/>
			</Head>

			<ModuleFrame data={HomeModules} />
		</BasicFrame>
	);
}
