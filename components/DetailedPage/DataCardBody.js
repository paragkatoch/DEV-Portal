import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";
import styles from "./styles/DataCardBody.module.scss";

import BasicButton from "../BasicButton";

export default function DataCardBody(props) {
	const asPath = useRouter().asPath.split("#")[0];

	return (
		<section className={styles.detailed_card}>
			<main className={styles.detailed_card_container}>
				<header id={props.alt} className={styles.card_header}>
					<Link href={`${asPath}#${props.alt}`}>
						<a>
							{props.img !== undefined ? (
								<div className={styles.image_container}>
									<Image src={props.img} alt={props.alt} layout="responsive" />
								</div>
							) : null}

							<h2>{props.heading}</h2>
						</a>
					</Link>
				</header>

				<main className={styles.detailed_card_body}>
					{props.description !== undefined ? (
						<div className={styles.description}>
							<p>{props.description}</p>
						</div>
					) : null}

					{props.nextAlt !== undefined ? (
						<BasicButton
							kickoff="Let's Go"
							url={`${asPath}#${props.nextAlt}`}
						/>
					) : (
						props.children
					)}
				</main>
			</main>
		</section>
	);
}
