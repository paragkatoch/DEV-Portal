import React from "react";
import DomainCore from "../Containers/DomainCore";
import PageFrame from "../Containers/PageFrame";
import { DomainData } from "../utils";

export default function Domain() {
	return (
		<PageFrame>
			<DomainCore {...DomainData} />
		</PageFrame>
	);
}
