import BasicFrame from "../components/Layouts/BasicFrame/BasicFrame";
import ModuleFrame from "../components/Layouts/ModuleFrame/ModuleFrame";
import { DeveloperModules } from "../utils/appData";

export default function Developer(props) {
	return (
		<BasicFrame>
			<ModuleFrame data={DeveloperModules} />
		</BasicFrame>
	);
}
