import BasicFrame from "../components/Layouts/BasicFrame/BasicFrame";
import ModuleFrame from "../components/Layouts/ModuleFrame/ModuleFrame";
import { MiscModules } from "../utils/appData";
import Head from "next/head";

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
