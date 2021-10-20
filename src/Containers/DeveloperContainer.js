import ModuleCards from "../Components/ModuleCards";
import { DeveloperModules } from "../ModuleData";

export default function DeveloperContainer() {
	return (
		<article className="main-developer">
			<ModuleCards cardsData={DeveloperModules} />
		</article>
	);
}
