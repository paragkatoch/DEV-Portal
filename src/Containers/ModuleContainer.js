import ModuleCards from "../Components/ModuleCards";

export default function ModuleContainer({ data }) {
	return (
		<article className="main-developer">
			<ModuleCards cardsData={data} />
		</article>
	);
}
