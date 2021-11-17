import BasicFrame from "../components/Layouts/BasicFrame/BasicFrame";
import ModuleFrame from "../components/Layouts/ModuleFrame/ModuleFrame";
import { MiscModules } from "../utils/appData";

export default function Misc(props) {
	return (
		<BasicFrame>
			<ModuleFrame data={MiscModules} />
		</BasicFrame>
	);
}
