import Head from "next/head";

import DetailedPage from "@/components/DetailedPage";
import BasicFrame from "@/components/Layouts/BasicFrame";

import { DeveloperModules } from "@/utils/appData";

export default function Dos_Donts() {
	const data = DeveloperModules[3];
	return (
		<BasicFrame>
			<Head>
				<title>Do&apos;s & Dont&apos;s</title>
				<meta
					name="description"
					content="Getting into a college and finding yourself in a dilemma, now we've got the exact tried and tested things to make sure you're on the right path to glory."
				/>
			</Head>

			<DetailedPage {...data} />
		</BasicFrame>
	);
}
