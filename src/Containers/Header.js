import React, { useEffect, useRef, useState } from "react";
import AppIcon from "../assets/AppIcon.svg";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import "../styles/Header.scss";

import { Link } from "react-router-dom";
import { useWindowSize } from "../customHooks";
import { APP } from "../utils";

export default function Header() {
	const [sideBarView, setSideBarView] = useState(false);

	const screenSize = useWindowSize();
	const buttonRef = useRef();
	const sideBarRef = useRef();

	useEffect(() => {
		if (screenSize.width <= 848 && !sideBarView) setSideBarView(true);
		else if (sideBarView && screenSize.width > 848) {
			setSideBarView(false);
			sideBarRef.current.classList.remove("header-sidebar-open");
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [screenSize, sideBarView, setSideBarView]);

	const handleHamburgerClick = () => {
		buttonRef.current.classList.toggle("hamBurger-open");
		sideBarRef.current.classList.toggle("header-sidebar-open");

		// handle scroll when sidebar is open
		const bodyOverflow =
			document.body.style.overflow === "hidden" ? "unset" : "hidden";
		document.body.style.overflow = bodyOverflow;
	};

	return (
		<header className="app-header">
			<main className="header-container">
				{sideBarView && (
					<button
						ref={buttonRef}
						className="hamBurger"
						onClick={handleHamburgerClick}
					>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</button>
				)}

				<section className="logo-container">
					<Link to="/">
						<img src={AppIcon} alt="app icon" />
						<h3>{APP.NAME}</h3>
					</Link>
				</section>

				{sideBarView && <div className="balancer"></div>}

				{sideBarView ? <SideBar sideBarRef={sideBarRef} /> : <NavBar />}
			</main>
		</header>
	);
}
