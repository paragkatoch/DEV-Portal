import Head from "next/head";

import BasicFrame from "../../components/Layouts/BasicFrame";
import ModuleFrame from "../../components/Layouts/ModuleFrame";

import { DegreeModules } from "../../utils/appData";

export default function Degree(props) {
	return (
		<BasicFrame>
			<Head>
				<title>DEV-Portal | Degree</title>
			</Head>

			<ModuleFrame data={DegreeModules} />
		</BasicFrame>
	);
}
