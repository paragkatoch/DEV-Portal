import "../styles/NavBar.scss";

import { Link, useLocation } from "react-router-dom";
import { NAV_DATA } from "../utils";

export default function NavBar() {
	const current = useLocation().pathname;

	return (
		<nav className="header-navbar">
			<ul className="navbar-container">
				{NAV_DATA.map((element, index) => (
					<li key={index} id={element.link === current ? "active" : null}>
						<Link to={element.link}>{element.title}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
