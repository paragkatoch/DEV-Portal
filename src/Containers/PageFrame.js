import React from "react";
import BasicFrame from "./BasicFrame";
import "../styles/PageFrame.scss";

export default function PageFrame({ footer = true, header = true, ...props }) {
	return (
		<BasicFrame {...{ footer, header }}>
			<main className="app-main">{props.children}</main>
		</BasicFrame>
	);
}
