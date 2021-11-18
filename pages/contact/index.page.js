import Image from "next/image";
import Head from "next/head";

import BasicFrame from "../../components/Layouts/BasicFrame/BasicFrame";
import styles from "./styles/ContactComponent.module.scss";

import LP from "../../public/assets/lp_contact.png";
import PK from "../../public/assets/pk_contact.png";
import UT from "../../public/assets/ut_contact.png";

const cardsData = [
	{ text: "Lakshit Pant", src: LP, alt: "Lakshit Pant" },
	{ text: "Parag Katoch", src: PK, alt: "Parag Katoch" },
	{ text: "Umair Tariq", src: UT, alt: "Umair Tariq" },
];

export default function Contact(props) {
	return (
		<BasicFrame>
			<Head>
				<title>Contact Us</title>
			</Head>

			<ContactComponent />
		</BasicFrame>
	);
}

function ContactComponent(props) {
	return (
		<main className={styles.contact_us}>
			<section className={`${styles.whoweare} ${styles.contact_section}`}>
				<header className={`${styles.header} ${styles.section_headers}`}>
					<p>Who are we?</p>
					<hr className={styles.underline} />
				</header>

				<main className={styles.contact_cards}>
					<div className={styles.cards_container}>
						{cardsData.map((cardInfo, i) => (
							<section key={i} className={styles.card}>
								<main className={styles.card_container}>
									<div className={styles.image_container}>
										<Image
											src={cardInfo.src}
											alt={cardInfo.alt}
											layout="responsive"
											sizes="10vw"
											priority={true}
										/>
									</div>

									<p>{cardInfo.text}</p>
								</main>
							</section>
						))}
					</div>
				</main>
			</section>

			<section
				className={`${styles.contact_contribute} ${styles.contact_section}`}
			>
				<header className={styles.header}>
					<p>Want to contribute?</p>
					<hr className={styles.underline} />
				</header>

				<main className={styles.main}>
					<p>
						Want to help other Dev’s get better? Join us in the battle of
						providing best world class resources for free. Sound’s like
						something you would be interested in?
					</p>
				</main>

				<button className={styles.button}>
					<a href="https://github.com/preIdiot/OneDevPlace">Count me in!</a>
				</button>
			</section>

			<section className={`${styles.contact_credit} ${styles.contact_section}`}>
				<header className={styles.header}>
					<p>Credit where it’s due</p>
					<hr className={styles.underline} />
				</header>

				<main className={styles.main}>
					<p>
						It&apos;s time to thank the heroes who made this project possible
						with their world-class resources.
					</p>
				</main>

				<button className={styles.button}>
					<a href="/contact/contribute">Thank them!</a>
				</button>
			</section>

			<section className={`${styles.made_by} ${styles.contact_section}`}>
				<p>
					Made with <span>❤</span> by L.P.U
				</p>
			</section>
		</main>
	);
}
