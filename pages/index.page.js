import BasicFrame from "../components/Layouts/BasicFrame/BasicFrame";
import ModuleFrame from "../components/Layouts/ModuleFrame/ModuleFrame";
import { HomeModules } from "../utils/appData";

export default function Home() {
	return (
		<BasicFrame>
			<ModuleFrame data={HomeModules} />
		</BasicFrame>
	);
}
