import styles from "./styles/redirect.module.scss";

export default function Redirect(props) {
	return (
		<main className={styles.redirect}>
			<div className={image_container}>
				<iframe
					className={styles.redirect_iframe}
					src="https://embed.lottiefiles.com/animation/75296"
				></iframe>
			</div>

			<div className={styles.redirect_quote}>
				<p className={styles.text}>
					“Always remember that the future comes one day at a time.”
				</p>

				<p className={styles.author}>- Dean Acheson</p>
			</div>
		</main>
	);
}
