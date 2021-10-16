import React from "react";
import Footer from "../Components/Footer";
import Header from "./Header";

export default function BasicFrame(props) {
	return (
		<>
			<Header />
			<main className="app-main-container">{props.children}</main>
			<Footer />
		</>
	);
}
