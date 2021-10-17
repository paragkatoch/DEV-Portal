import React from "react";
import NotFoundComponent from "../Components/NotFound";
import BasicFrame from "../Containers/BasicFrame";

export default function NotFound() {
	return (
		<BasicFrame footer={false}>
			<NotFoundComponent />
		</BasicFrame>
	);
}
