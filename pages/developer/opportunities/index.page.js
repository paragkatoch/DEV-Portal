import Head from "next/head";

import DomainCore from "../../../components/DomainCore";
import BasicFrame from "../../../components/Layouts/BasicFrame";

import { DeveloperModules } from "../../../utils/appData";

export default function Domain() {
	const data = DeveloperModules[1];

	return (
		<BasicFrame>
			<Head>
				<title>Domain</title>
				<meta
					name="description"
					content="Choose cautiously because your domain will determine your future aspects. We've compiled a list of the best domains in the industry for you to consider before getting started."
				/>
			</Head>

			<DomainCore {...data} />
		</BasicFrame>
	);
}
