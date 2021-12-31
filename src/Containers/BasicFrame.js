import React from "react";
import Footer from "../Components/Footer";
import Header from "./Header";

export default function BasicFrame({ footer = true, header = true, ...props }) {
	return (
		<div
			className="BasicFrame"
			style={{ minHeight: "100vh", height: "fit-content" }}
		>
			{header ? <Header /> : null}
			<main className="app-main-container">{props.children}</main>
			{footer ? <Footer /> : null}
		</div>
	);
}
