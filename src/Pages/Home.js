import React from "react";
import PageFrame from "../Containers/PageFrame";
import ModuleContainer from "../Containers/ModuleContainer";
import { HomeModules } from "../ModuleData";

export default function Home() {
	return (
		<>
			<PageFrame>
				<ModuleContainer data={HomeModules} />
			</PageFrame>
		</>
	);
}
