import Head from "next/head";

import BasicFrame from "../../components/Layouts/BasicFrame";
import ModuleFrame from "../../components/Layouts/ModuleFrame";

import { DeveloperModules } from "../../utils/appData";

export default function Developer(props) {
	return (
		<BasicFrame>
			<Head>
				<title>DEV-Portal | Developer</title>
			</Head>

			<ModuleFrame data={DeveloperModules} />
		</BasicFrame>
	);
}
