import { Link } from "react-router-dom";
import "../styles/CourseCard.scss";

export default function CourseCard(props) {
	return (
		<section className={`course-card ${props?.disabled ? "disabled" : ""}`}>
			<Link to={props.link}>
				<img src={props.img} alt={props.alt} />
				<p>{props.courseName}</p>
			</Link>
		</section>
	);
}
