import "../styles/SideBar.scss";

import { NAV_DATA } from "../utils";
import { Link, useLocation } from "react-router-dom";

export default function SideBar({ sideBarRef }) {
	const current = useLocation().pathname;

	return (
		<aside className="header-sidebar" ref={sideBarRef}>
			<ul className="sidebar-container">
				{NAV_DATA.map((element, index) => (
					<li key={index} id={element.link === current ? "active" : null}>
						<Link to={element.link}>
							{element.title}
							<hr className="link_underline" />
						</Link>
					</li>
				))}
			</ul>
		</aside>
	);
}
