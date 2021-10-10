import React from "react";
import "../styles/Header.scss";
import { Link } from "react-router-dom";
import AppIcon from "../assets/AppIcon.svg";
import { NAV_DATA } from "../utils";

export default function Header() {
	return (
		<header className="app-header">
			<main className="header-container">
				<button className="hamBurger">
					<div id="line line1"></div>
					<div id="line line2"></div>
					<div id="line line3"></div>
				</button>
				<section className="logo-container">
					<Link to="/">
						<img src={AppIcon} alt="app icon" />
						<h3>OneDevPlace</h3>
					</Link>
				</section>
				<NavBar />
				<SideBar />
			</main>
		</header>
	);
}

function NavBar() {
	const current = "Developer";
	return (
		<nav className="header-navbar">
			<ul className="navbar-container">
				{NAV_DATA.map((element) => (
					<li id={element.title === current ? "active" : null}>
						<Link to={element.link}>{element.title}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

function SideBar() {
	return <></>;
}
