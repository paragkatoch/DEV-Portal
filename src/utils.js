import ComingSoon from "./assets/courses/comingsoon.png";

import WebDev from "./assets/courses/domain/webdev.png";
import AndroidDev from "./assets/courses/domain/androiddev.png";
import AIML from "./assets/courses/domain/aiml.png";
import CloudDev from "./assets/courses/domain/clouddev.png";
import IOSDev from "./assets/courses/domain/iosdev.png";

import ADA from "./assets/courses/core/ada.png";
import CSO from "./assets/courses/core/cso.png";
import CyberSecurity from "./assets/courses/core/cybersecurity.png";
import DBMS from "./assets/courses/core/dbms.png";
import DSAlgo from "./assets/courses/core/dsalgo.png";
import Maths from "./assets/courses/core/maths.png";
import OOPS from "./assets/courses/core/oops.png";
import OS from "./assets/courses/core/os.png";
import SystemDesign from "./assets/courses/core/systemdesign.png";
import TOC from "./assets/courses/core/toc.png";

export const APP = {
	NAME: "DEV-Portal",
	EMAIL: "Kamra103@gmail.com",
	CONTACT_NO: "confidential",
};

// Nav Data
export const NAV_DATA = [
	{
		title: "Developer",
		link: "/developer",
	},
	{
		title: "Degree",
		link: "/degree",
	},
	{
		title: "Misc.",
		link: "/Misc",
	},
	{
		title: "Contact Us.",
		link: "/contact",
	},
];

// Footer Data
export const FOOTER_DATA = [
	{
		title: APP.NAME,
		contents: [
			{ name: "Home", link: "/home" },
			{ name: "Developer", link: "/developer" },
			{ name: "Degree", link: "/degree" },
			{ name: "Misc.", link: "/misc" },
		],
	},
	{
		title: "Info",
		contents: [
			{ name: "Website", link: "/" },
			{ name: "Contact Us", link: "/contact" },
			{ name: "Download Source Code", link: "/" },
		],
	},
	{
		title: "Contacts",
		contents: [
			{ name: "Phone number:", value: APP.CONTACT_NO, link: "" },
			{ name: "E-mail:", value: APP.EMAIL, link: `mailto:${APP.EMAIL}` },
		],
	},
	{
		title: "Follow",
		contents: [
			{ name: "Facebook", link: "" },
			{ name: "LinkedIn", link: "" },
			{ name: "Instagram", link: "" },
			{ name: "Twitter", link: "" },
		],
	},
];

// Domain Data
export const DomainData = {
	heading: "Choose your domain of Interest",
	className: "domain",
	courses: [
		{
			img: WebDev,
			alt: "web development",
			courseName: "Web Development",
			link: "/resource/web_development",
		},
		{
			img: AndroidDev,
			alt: "android development",
			courseName: "Android Development",
			link: "/resource/android_development",
		},
		{
			img: CloudDev,
			alt: "cloud development",
			courseName: "Cloud Development",
			link: "/resource/cloud_development",
		},
		{
			img: AIML,
			alt: " artificial intelligence and machine learning",
			courseName: "AI/ML",
			link: "/resource/ai_ml",
		},
		{
			img: IOSDev,
			alt: "ios development",
			courseName: "IOS Development",
			link: "/developer/domain",
			disabled: true,
		},
		{
			img: ComingSoon,
			alt: "coming soon",
			courseName: "More coming Soon....",
			link: "/developer/domain",
			disabled: true,
		},
	],
};

export const CoreData = {
	heading: "Explore CORE of your interest",
	className: "core",
	courses: [
		{
			img: DSAlgo,
			alt: "data structures and algorithm",
			courseName: "DS and Algo",
			link: "/resource/core/ds_algo",
		},
		{
			img: ADA,
			alt: "analysis and design of algorithm",
			courseName: "ADA",
			link: "/resource/core/ada",
		},
		{
			img: CyberSecurity,
			alt: "cyber security",
			courseName: "Cyber Security",
			link: "/resource/core/cyber_security",
		},
		{
			img: SystemDesign,
			alt: "system design",
			courseName: "System Design",
			link: "/resource/core/system_design",
		},
		{
			img: Maths,
			alt: "maths",
			courseName: "Maths",
			link: "/resource/core/maths",
		},
		{
			img: CSO,
			alt: "cso",
			courseName: "CSO",
			link: "/resource/core/cso",
		},
		{
			img: OS,
			alt: "operating system",
			courseName: "Operating System",
			link: "/resource/core/operating_system",
		},
		{
			img: TOC,
			alt: "theory of computation",
			courseName: "Theory of Computation",
			link: "/resource/core/toc",
		},
		{
			img: DBMS,
			alt: "database and management system",
			courseName: "DBMS",
			link: "/resource/core/dbms",
		},
		{
			img: OOPS,
			alt: "oops",
			courseName: "OOPS",
			link: "/resource/core/oops",
		},
		{
			img: ComingSoon,
			alt: "coming soon",
			courseName: "More coming Soon....",
			link: "/developer/domain",
			disabled: true,
		},
	],
};
