import Footer from "./elements/Footer/Footer";
import Header from "./elements/Header/Header";

export default function BasicFrame(props) {
	const { footer = true, header = true } = props;

	return (
		<div
			className="BasicFrame"
			style={{ minHeight: "100vh", height: "fit-content" }}
		>
			{header ? <Header /> : null}
			<main
				className="app-main"
				style={{
					overflow: "hidden",
					padding: "0 2rem",
					marginTop: "3rem",
					marginBottom: "16rem",
				}}
			>
				{props.children}
			</main>
			{footer ? <Footer /> : null}
		</div>
	);
}
