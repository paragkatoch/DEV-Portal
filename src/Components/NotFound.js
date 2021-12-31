import React from "react";
import NotFoundImage from "../assets/NotFound.png";
import "../styles/NotFound.scss";

export default function NotFoundComponent() {
	return (
		<main className="app-notfound">
			<img src={NotFoundImage} alt="Not Found" />
			<p>Looks like you found our intern’s project!</p>
		</main>
	);
}
