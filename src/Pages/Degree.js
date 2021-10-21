import React from "react";
import ModuleContainer from "../Containers/ModuleContainer";
import PageFrame from "../Containers/PageFrame";
import { DegreeModules } from "../ModuleData";

export default function Degree() {
	return (
		<PageFrame>
			<ModuleContainer data={DegreeModules} />
		</PageFrame>
	);
}
