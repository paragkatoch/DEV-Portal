import styles from "./styles/basicButton.module.scss";
import Link from "next/link";

export default function BasicButton(data) {
	return (
		<button className={styles.card_button}>
			<Link href={data.url}>
				<a>{data.kickoff}</a>
			</Link>
		</button>
	);
}
