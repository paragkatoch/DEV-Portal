import React from "react";
import DomainCore from "../Containers/DomainCore";
import PageFrame from "../Containers/PageFrame";
import { CoreData } from "../utils";

export default function Core() {
	return (
		<PageFrame>
			<DomainCore {...CoreData} />
		</PageFrame>
	);
}
