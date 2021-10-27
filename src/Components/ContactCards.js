import { Link } from "react-router-dom";
import LP from "../assets/lp_contact.png";
import PK from "../assets/pk_contact.png";
import UT from "../assets/ut_contact.png";
import "../styles/ContactCards.scss";

const cardsData = [
	{ text: "Lakshit Pant", src: LP, alt: "Lakshit Pant" },
	{ text: "Parag Katoch", src: PK, alt: "Parag Katoch" },
	{ text: "Umair Tariq", src: UT, alt: "Umair Tariq" },
];

export default function ContactCards() {
	return (
		<article className="contact-us">
			<section className="contact-whoweare contact-section">
				<header className="cards-header section-headers">
					<p>Who are we?</p>
					<hr className="underline" />
				</header>
				<article className="contact-cards">
					<section className="cards-container">
						{cardsData.map((card, i) => (
							<ContactCard key={i} cardInfo={card} />
						))}
					</section>
				</article>
			</section>
			<section className="contact-contribute contact-section">
				<header className="section-headers">
					<p>Want to contribute?</p>
					<hr className="underline" />
				</header>
				<main className="section-main">
					<p>
						Want to help other Dev’s get better? Join us in the battle of
						providing best world class resources for free. Sound’s like
						something you would be interested in?
					</p>
				</main>
				<button className="section-button">
					<a href="https://github.com/preIdiot/OneDevPlace">Count me in!</a>
				</button>
			</section>
			<section className="contact-credit contact-section">
				<header className="section-headers">
					<p>Credit where it’s due</p>
					<hr className="underline" />
				</header>
				<main className="section-main">
					<p>
						It's time to thank the heroes who made this project possible with
						their world-class resources.
					</p>
				</main>
				<button className="section-button">
					<a href="/contact/contribute">Thank them!</a>
				</button>
			</section>
			<section className="made-by contact-section">
				<p>
					Made with <span>❤</span> by L.P.U
				</p>
			</section>
		</article>
	);
}

function ContactCard({ dummy = false, cardInfo }) {
	return (
		<section className="contact-card">
			<main className={`card-container ${dummy ? "dummy" : ""}`}>
				{dummy ? (
					""
				) : (
					<>
						<img src={cardInfo.src} alt={cardInfo.alt} />
						<p>{cardInfo.text}</p>
					</>
				)}
			</main>
		</section>
	);
}
