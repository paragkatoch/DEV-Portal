import Head from "next/head";

import DomainCore from "../../../components/DomainCore";
import BasicFrame from "../../../components/Layouts/BasicFrame";
import { DomainData } from "../../../utils/appData";

export default function Domain() {
	return (
		<BasicFrame>
			<Head>
				<title>Developer | Domain</title>
				<meta
					name="description"
					content="Choose wisely as your domain decides your future actions, we provide the best domain options to opt before getting started."
				/>
			</Head>

			<DomainCore {...DomainData} />
		</BasicFrame>
	);
}
