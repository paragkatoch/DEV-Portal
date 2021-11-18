import Head from "next/head";

import BasicFrame from "../../components/Layouts/BasicFrame";
import ModuleFrame from "../../components/Layouts/ModuleFrame";

import { MiscModules } from "../../utils/appData";

export default function Misc(props) {
	return (
		<BasicFrame>
			<Head>
				<title>DEV-Portal | Miscellaneous</title>
			</Head>

			<ModuleFrame data={MiscModules} />
		</BasicFrame>
	);
}
