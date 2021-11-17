import BasicFrame from "../components/Layouts/BasicFrame/BasicFrame";
import ModuleFrame from "../components/Layouts/ModuleFrame/ModuleFrame";
import { DegreeModules } from "../utils/appData";

export default function Degree(props) {
	return (
		<BasicFrame>
			<ModuleFrame data={DegreeModules} />
		</BasicFrame>
	);
}
