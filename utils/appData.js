import ComingSoon from "../public/assets/courses/comingsoon.png";

import WebDev from "../public/assets/courses/domain/webdev.png";
import AndroidDev from "../public/assets/courses/domain/androiddev.png";
import AIML from "../public/assets/courses/domain/aiml.png";
import CloudDev from "../public/assets/courses/domain/clouddev.png";
import IOSDev from "../public/assets/courses/domain/iosdev.png";

import ADA from "../public/assets/courses/core/ada.png";
import CSO from "../public/assets/courses/core/cso.png";
import CyberSecurity from "../public/assets/courses/core/cybersecurity.png";
import DBMS from "../public/assets/courses/core/dbms.png";
import DSAlgo from "../public/assets/courses/core/dsalgo.png";
import Maths from "../public/assets/courses/core/maths.png";
import OOPS from "../public/assets/courses/core/oops.png";
import OS from "../public/assets/courses/core/os.png";
import SystemDesign from "../public/assets/courses/core/systemdesign.png";
import TOC from "../public/assets/courses/core/toc.png";

import DeveloperHome from "../public/assets/developer_home.svg";
import DegreeHome from "../public/assets/degree_home.svg";
import MiscHome from "../public/assets/misc_home.svg";
import ContactHome from "../public/assets/contact_home.svg";

import DomainDeveloper from "../public/assets/domain_developer.svg";
import UpcomingDeveloper from "../public/assets/upcoming_developer.svg";
import HelpDeveloper from "../public/assets/findhelp_developer.svg";
import DoDontDeveloper from "../public/assets/dodont_developer.svg";

import CoreDegree from "../public/assets/core_degree.svg";
import CPDegree from "../public/assets/cp_degree.svg";
import BenefitsDegree from "../public/assets/benefits_degree.svg";

import NetworkMisc from "../public/assets/network_misc.svg";
import AdviceMisc from "../public/assets/advice_misc.svg";
import GrowthMisc from "../public/assets/growth_misc.svg";
import AppMisc from "../public/assets/app_misc.svg";

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
		link: "/misc",
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
			{
				name: "Download source code",
				link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			},
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

export const HomeModules = [
	{
		title: "Developer",
		desc: "Aspirants Devs we’re having amazing things for you here, time is very precious better to use it wisely. Check out specialised section for Developers.",
		img: DeveloperHome,
		alt: "developer",
		kickoff: "Let’s Go",
		url: "/developer",
	},
	{
		title: "Degree",
		desc: "No barrier of Tiers, check out some best college insights that we’re sharing here. Get most from your college & be the best version of yourself.",
		img: DegreeHome,
		alt: "degree",
		kickoff: "Find Out",
		url: "/degree",
	},
	{
		title: "Miscellaneous",
		desc: "Getting a glory is way easy if you’re into the right path. Take the right step, and for side hustles and some personality dev jump off to this section. ",
		img: MiscHome,
		alt: "miscellaneous",
		kickoff: "Let’s Go",
		url: "/misc",
	},
	{
		title: "Contact Us",
		desc: "Our goal is to pass on what we've learned to the next generation. Learn how you may contribute to the future generation's development.",
		img: ContactHome,
		alt: "contact us",
		kickoff: "Find Out",
		url: "/contact",
	},
];

export const DeveloperModules = [
	{
		title: "Follow your domain",
		desc: "You know what you have inside, we have got you a list of top grossing domains that you must explore before getting started.",
		img: DomainDeveloper,
		alt: "domains",
		kickoff: "Let's Go",
		url: "/developer/domain",
	},
	{
		title: "Upcoming opportunities",
		desc: "Picking up to the best opportunity is an asset.\nWe've covered some of the eminent programs that can take you to the glory.",
		img: UpcomingDeveloper,
		alt: "opportunities",
		kickoff: "Find Out",
		url: "/developer/opportunities",
	},
	{
		title: "Where to find help",
		desc: "Ever find yourself trapped in a difficulty while working with a new technology? Access the best of the public forms for help!",
		img: HelpDeveloper,
		alt: "find help",
		kickoff: "Let's Go",
		url: "/developer/find-help",
	},
	{
		title: "Do's and Don'ts",
		desc: "New exposures are like two sides of a coin, therefore it's best to be prepared. Check out some Do's and Don'ts for a fresher.",
		img: DoDontDeveloper,
		alt: "people busy in mobile device",
		kickoff: "Show Me",
		url: "/developer/do-dont",
	},
];

export const DegreeModules = [
	{
		title: "Keep CORE in line",
		desc: "Better the foundation the longer you last in the battlefield.Check out some important CORE subjects that you must know as a developer.",
		img: CoreDegree,
		alt: "core subjects",
		kickoff: "Let's Go",
		url: "/degree/core",
	},
	{
		title: "Competitive Programming",
		desc: "Are you a born fighter, do you really think you have the zeal to compete? Check out what Competitive Programming has for you.",
		img: CPDegree,
		alt: "competitive programming",
		kickoff: "Find Out",
		url: "/core/competitive",
	},
	{
		title: "Benefits of being a student",
		desc: "Ever thought about the perks of being a student? All your dream companies are sending free gifts for you! Let’s see what’s in the box.",
		img: BenefitsDegree,
		alt: "benefits of a student",
		kickoff: "Let's Go",
		url: "/core/benefits",
	},
];

export const MiscModules = [
	{
		title: "Networking",
		desc: 'Once a wise man said "Show me your friends and I\'ll tell you who you are." Connect with great people, learn how to network.',
		img: NetworkMisc,
		alt: "networking between the world",
		kickoff: "Let's Go",
		url: "/misc/networking",
	},
	{
		title: "Financial Advice",
		desc: "Skills will get you glory, glory will get you money. Get in here for financial insights and build your assests. ",
		img: AdviceMisc,
		alt: "financial advices",
		kickoff: "Find Out",
		url: "/misc/financial_advice",
	},
	{
		title: "Personal Growth",
		desc: "Having skills isn’t enough, you should know how to present them. Be Confident, check out some best resources here.",
		img: GrowthMisc,
		alt: "personal growth",
		kickoff: "Let's Go",
		url: "/misc/growth",
	},
	{
		title: "Must-have apps ",
		desc: "If you spend most of your time on your phone, check out some of the best apps, you must have to be more productive.",
		img: AppMisc,
		alt: "must apps to have",
		kickoff: "Show Me",
		url: "/misc/apps",
	},
];
