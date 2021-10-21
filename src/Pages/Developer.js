import PageFrame from "../Containers/PageFrame";
import ModuleContainer from "../Containers/ModuleContainer";
import { DeveloperModules } from "../ModuleData";

export default function Developer() {
	return (
		<PageFrame>
			<ModuleContainer data={DeveloperModules} />
		</PageFrame>
	);
}
