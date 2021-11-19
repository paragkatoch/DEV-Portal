import Link from "next/link";
import Image from "next/image";

import styles from "./CourseCard.module.scss";

export default function CourseCard(props) {
	return (
		<section
			className={`${styles.course_card} ${
				props?.disabled ? styles.disabled : ""
			}`}
		>
			<Link href={props.link}>
				<a>
					<div className={styles.image_container}>
						<Image
							src={props.img}
							alt={props.alt}
							layout="responsive"
							sizes="10vw"
						/>
					</div>
					<p>{props.courseName}</p>
				</a>
			</Link>
		</section>
	);
}
