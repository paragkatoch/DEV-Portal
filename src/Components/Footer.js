import React from "react";
import "../styles/Footer.scss";
import { FOOTER_DATA } from "../utils";

export default function Footer() {
	return (
		<footer className="app-footer">
			<main className="footer-container">
				{FOOTER_DATA.map((data) => (
					<FooterContent {...{ data }} />
				))}
			</main>
		</footer>
	);
}

/**
 * FooterContent
 * @param {Object} data footer-section data
 * @returns jsx for footer-section
 */
function FooterContent({ data }) {
	return (
		<section id={`footer-${data.title}`} className="footer-section">
			<h2>{data.title}</h2>
			<div className="underline"></div>

			<section className="footer-contents">
				{data.contents.map((content) => (
					<section className="content">
						{content?.value && <p>{content.name}</p>}
						<a href={content.link}>
							{content?.value ? content.value : content.name}
						</a>
					</section>
				))}
			</section>
		</section>
	);
}
