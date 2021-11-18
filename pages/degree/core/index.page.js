import DomainCore from "../../../components/DomainCore";
import BasicFrame from "../../../components/Layouts/BasicFrame";
import { CoreData } from "../../../utils/appData";

export default function Core() {
	return (
		<BasicFrame>
			<DomainCore {...CoreData} />
		</BasicFrame>
	);
}
