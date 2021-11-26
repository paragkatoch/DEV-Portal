import { useEffect, useState } from "react";
import { useWindowSize } from "../../utils/customHooks";

import Image from "next/image";
import styles from "./styles/DataCards.module.scss";

import YoutubeLink from "../../public/assets/youtube_link.svg";
import WebLink from "../../public/assets/website_link.svg";

export default function DataCards(props) {
	const defaultLimit = 3;

	const [showMore, setShowMore] = useState(false);
	const [limit, setLimit] = useState(defaultLimit);
	const screenSize = useWindowSize();

	useEffect(() => {
		screenSize.width <= 968 ? setLimit(2) : setLimit(3);
	}, [screenSize]);

	function showButton(i, array) {
		return showMore
			? i === array.length - 1
			: i === limit - 1 && array.length !== limit;
	}

	return (
		<div className={styles.data_cards}>
			<div className={styles.data_cards_container}>
				{props.dataCards.map((dataCard, i, array) =>
					i < limit || showMore ? (
						<DataCard key={i} {...dataCard}>
							{showButton(i, array) ? (
								<ViewButton {...{ showMore, setShowMore }} />
							) : null}
						</DataCard>
					) : null
				)}
			</div>
		</div>
	);
}

function DataCard(props) {
	return (
		<section className={styles.data_card}>
			<a href={props.link} rel="noreferrer" target="_blank">
				<main className={styles.data_card_container}>
					<div className={styles.link_type}></div>

					<section className={styles.data}>
						<div className={styles.image_container}>
							<Image src={props.img} alt={props.alt} layout="responsive" />
						</div>

						<p>{props.heading}</p>
					</section>

					<div className={styles.link_type}>
						{props.type !== undefined ? (
							<div className={styles.image_container}>
								<Image
									src={props.type === "youtube" ? YoutubeLink : WebLink}
									alt="youtube"
									layout="responsive"
								/>
							</div>
						) : null}
					</div>
				</main>
			</a>

			{props.children}
		</section>
	);
}

function ViewButton({ showMore, setShowMore }) {
	const onButtonClick = () => {
		setShowMore((prev) => !prev);
	};

	return (
		<div className={styles.view_element}>
			<button className={styles.view_button} onClick={onButtonClick}>
				{showMore ? "view less..." : "view more..."}
			</button>
		</div>
	);
}
