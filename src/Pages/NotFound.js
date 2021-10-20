import NotFoundComponent from "../Components/NotFound";
import PageFrame from "../Containers/PageFrame";

export default function NotFound() {
	return (
		<PageFrame footer={false}>
			<NotFoundComponent />
		</PageFrame>
	);
}
