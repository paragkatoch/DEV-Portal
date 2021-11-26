import DataCardBody from "./DataCardBody";
import DataCards from "./DataCards";

import styles from "./styles/DetailedPage.module.scss";

export default function DetailedPage(props) {
	return (
		<main className={styles.detailed_page}>
			{props.data.map((card, i) => (
				<DataCardBody key={i} {...card}>
					{card.dataCards !== undefined ? (
						<DataCards key={i} dataCards={card.dataCards} />
					) : null}
				</DataCardBody>
			))}
		</main>
	);
}
