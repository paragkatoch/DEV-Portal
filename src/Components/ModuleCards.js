import "../styles/ModuleCards.scss";

export default function ModuleCards({ cardsData }) {
	return (
		<section className="module-cards">
			{cardsData.map((cardData, i) => (
				<article className="module-card">
					<section className="card-data card-data-left">
						<header className="card-data-left--header">
							<p>{cardData.title}</p>
							<hr className="underline" />
						</header>

						<article className="card-data-description">
							<p>{cardData.desc}</p>
						</article>

						<button className="card-data-button">
							<a href={cardData.url}>{cardData.kickoff}</a>
						</button>
					</section>

					<section className="card-data card-data-right card-img">
						<img
							src={cardData.img}
							alt={cardData.alt}
							width="fit-content"
							height="fit-content"
						/>
					</section>
				</article>
			))}
		</section>
	);
}
