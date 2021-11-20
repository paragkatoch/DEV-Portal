import Head from "next/head";

import DomainCore from "../../../components/DomainCore";
import BasicFrame from "../../../components/Layouts/BasicFrame";
import { CoreData } from "../../../utils/appData";

export default function Core() {
	return (
		<BasicFrame>
			<Head>
				<title>Degree | Core</title>
				<meta
					name="description"
					content="Top-rated core subjects with resources, roadmaps, and handouts for acing the interviews."
				/>
			</Head>

			<DomainCore {...CoreData} />
		</BasicFrame>
	);
}
