import ResourceCard from "./elements/ResourceCard";
import LinkCard from "./elements/LinkCard";

import styles from "./styles/DetailedPage.module.scss";
import ListCard from "./elements/ListCard";

export default function DetailedPage(props) {
	let PageType;

	if (props.pageType === "card-type") PageType = CardType;
	else if (props.pageType === "list-type") PageType = ListType;
	else throw new Error("invalid page type");

	return <PageType {...props} />;
}

function CardType(props) {
	return (
		<main className={styles.detailed_page}>
			{props.data.map((card, i) => (
				<ResourceCard key={i} {...card}>
					{card.dataCards && <LinkCard key={i} dataCards={card.dataCards} />}
				</ResourceCard>
			))}
		</main>
	);
}

function ListType(props) {
	return (
		<main className={styles.detailed_page}>
			{props.data.map((list, i) => (
				<ResourceCard key={i} {...list}>
					{list.children && <ListCard key={i} data={list.children} />}
				</ResourceCard>
			))}
		</main>
	);
}
