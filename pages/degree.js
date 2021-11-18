import BasicFrame from "../components/Layouts/BasicFrame/BasicFrame";
import ModuleFrame from "../components/Layouts/ModuleFrame/ModuleFrame";
import { DegreeModules } from "../utils/appData";

import Head from "next/head";
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
