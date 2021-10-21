import React from "react";
import ModuleContainer from "../Containers/ModuleContainer";
import PageFrame from "../Containers/PageFrame";
import { MiscModules } from "../ModuleData";

export default function Miscellaneous() {
	return (
		<PageFrame>
			<ModuleContainer data={MiscModules} />
		</PageFrame>
	);
}
