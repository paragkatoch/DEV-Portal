import DomainCore from "../../../components/DomainCore";
import BasicFrame from "../../../components/Layouts/BasicFrame";
import { DomainData } from "../../../utils/appData";

export default function Domain() {
	return (
		<BasicFrame>
			<DomainCore {...DomainData} />
		</BasicFrame>
	);
}
