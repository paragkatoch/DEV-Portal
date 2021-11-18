import BasicFrame from "../components/Layouts/BasicFrame/BasicFrame";
import styles from "../styles/NotFound.module.scss";
import Image from "next/image";

export default function NotFoundComponent() {
	return (
		<BasicFrame footer={false}>
			<main className={styles.app_notfound}>
				<div className={styles.img_container}>
					<Image
						src="/assets/NotFound.png"
						width="697"
						layout="responsive"
						sizes="100vw"
						height="345.5"
						alt="Not Found"
					/>
				</div>
				<p>Looks like you found our intern’s project!</p>
			</main>
		</BasicFrame>
	);
}
