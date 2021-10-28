import React from "react";
import CourseCard from "../Components/CourseCard";
import "../styles/DomainCore.scss";

export default function DomainCore(props) {
	return (
		<article className="domain-core">
			<p>{props.heading}</p>
			<main className={`${props.className}-cards cards-section`}>
				{props.courses.map((course) => (
					<CourseCard {...course} />
				))}
			</main>
		</article>
	);
}
