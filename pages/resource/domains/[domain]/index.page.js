import DetailedPage from "../../../../components/DetailedPage";
import BasicFrame from "../../../../components/Layouts/BasicFrame";
import { DomainData } from "../../../../utils/appData";

export async function getStaticPaths() {
	const paths = DomainData.courses
		.filter((course) => {
			return !course?.disabled;
		})
		.map((course) => ({
			params: { domain: course.alt },
		}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const domainData = DomainData.courses.find((course) => {
		return course.alt === params.domain;
	});

	return {
		props: {
			domainData,
		},
	};
}

export default function Domain({ domainData }) {
	console.log(domainData);
	return (
		<BasicFrame>
			<DetailedPage {...domainData} />
		</BasicFrame>
	);
}
