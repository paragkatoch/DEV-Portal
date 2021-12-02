import Head from "next/head";

import DomainCore from "@/components/DomainCore";
import BasicFrame from "@/components/Layouts/BasicFrame";

import { DeveloperModules } from "@/utils/appData";

export default function Domain() {
	const data = DeveloperModules[1];

	return (
		<BasicFrame>
			<Head>
				<title>Opportunities</title>
				<meta
					name="description"
					content="Never miss an opportunity with us, get regular updates on fore coming events and programs."
				/>
			</Head>

			<DomainCore {...data} />
		</BasicFrame>
	);
}
