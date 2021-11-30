import CourseCard from "./elements/CourseCard";
import styles from "./styles/DomainCore.module.scss";

export default function DomainCore(props) {
	return (
		<article className={styles.domain_core}>
			<p>{props.title}</p>

			<main className={`${props.className}-cards ${styles.cards_section}`}>
				{props.courses.map((course, i) => (
					<CourseCard key={i} {...course} />
				))}
			</main>
		</article>
	);
}
