import DomainDeveloper from "./assets/domain_developer.svg";
import UpcomingDeveloper from "./assets/upcoming_developer.svg";
import HelpDeveloper from "./assets/findhelp_developer.svg";
import DoDontDeveloper from "./assets/dodont_developer.svg";

import CoreDegree from "./assets/core_degree.svg";
import CPDegree from "./assets/cp_degree.svg";
import BenefitsDegree from "./assets/benefits_degree.svg";

import NetworkMisc from "./assets/network_misc.svg";
import AdviceMisc from "./assets/advice_misc.svg";
import GrowthMisc from "./assets/growth_misc.svg";
import AppMisc from "./assets/app_misc.svg";

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
