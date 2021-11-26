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

// App Data
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
			{
				name: "Phone number:",
				value: APP.CONTACT_NO,
				link: `tel:${APP.CONTACT_NO}`,
			},
			{ name: "E-mail:", value: APP.EMAIL, link: `mailto:${APP.EMAIL}` },
		],
	},
	{
		title: "Follow",
		contents: [
			{ name: "Facebook", link: "https://www.facebook.com/" },
			{ name: "LinkedIn", link: "https://www.linkedin.com/" },
			{ name: "Instagram", link: "https://www.instagram.com/" },
			{ name: "Twitter", link: "https://www.twitter.com" },
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
			alt: "web_development",
			courseName: "Web Development",
			link: "/resource/domains/web_development",
			data: [
				{
					img: WebDev,
					alt: "web_development",
					heading: "Web Development",
					nextAlt: "roadmap",
					description:
						"We've compiled a reference list, a roadmap to follow, the best project ideas, and some entertaining quizzes to test your knowledge for the Web domain.",
				},
				{
					heading: "Roadmap",
					alt: "roadmap",
					description:
						"After evaluating the tech stacks you'll need, build your skills from the ground up. These structured pathways will help you decide what to start first.",
					dataCards: [
						{
							heading: "Frontend",
							img: WebDev,
							alt: "frontend",
							link: "https://roadmap.sh/frontend",
						},
						{
							heading: "Backend",
							img: WebDev,
							alt: "backend",
							link: "https://roadmap.sh/backend",
						},
					],
				},
				{
					heading: "Resources",
					description:
						"Time saver skill booster efficient video resources to enhance your knowledge. Esteemed and tested channels to start from very basics to advance level with super creativity level.",
					alt: "resources",
					dataCards: [
						{
							heading: "FreeCodeCamp",
							img: WebDev,
							alt: "freecodecamp",
							link: "https://www.youtube.com/c/Freecodecamp",
							type: "youtube",
						},
						{
							heading: "Traversy Media",
							img: WebDev,
							alt: "traversy Media",
							link: "https://www.youtube.com/c/TraversyMedia",
							type: "youtube",
						},
						{
							heading: "CS50",
							img: WebDev,
							alt: "CS50",
							link: "https://www.youtube.com/c/cs50",
							type: "youtube",
						},
						{
							heading: "Fireship",
							img: WebDev,
							alt: "fireship",
							link: "https://www.youtube.com/c/Fireship",
							type: "youtube",
						},
						{
							heading: "The Net Ninza",
							img: WebDev,
							alt: "the net ninza",
							link: "https://www.youtube.com/c/TheNetNinja",
							type: "youtube",
						},
						{
							heading: "FreeCodeCamp",
							img: WebDev,
							alt: "freecodecamp",
							link: "https://www.freecodecamp.org/",
							type: "website",
						},
						{
							heading: "MDN",
							img: WebDev,
							alt: "MDN",
							link: "https://developer.mozilla.org/en-US/",
							type: "website",
						},
						{
							heading: "W3Schools",
							img: WebDev,
							alt: "w3schools",
							link: "https://www.w3schools.com/",
							type: "website",
						},
						{
							heading: "Frontend Masters",
							img: WebDev,
							alt: "frontend Masters",
							link: "https://frontendmasters.com/",
							type: "website",
						},
						{
							heading: "Educative",
							img: WebDev,
							alt: "educative",
							link: "https://www.educative.io/",
							type: "website",
						},
						{
							heading: "Wes Bos",
							img: WebDev,
							alt: "wes bos",
							link: "https://wesbos.com/",
							type: "website",
						},
					],
				},
				{
					heading: "Project Ideas",
					description: "No Description",
					alt: "project_ideas",
					dataCards: [
						{
							heading: "Code Editor",
							img: WebDev,
							alt: "Online Code Editor (React)",
							link: "https://www.crio.do/projects/react-code-editor/",
						},
						{
							heading: "Codechef Notifier",
							img: WebDev,
							alt: "Codechef Notifier",
							link: "https://www.crio.do/projects/javascript-codechef-notifier/",
						},
						{
							heading: "Amazon clone",
							img: WebDev,
							alt: "Amazon clone using React",
							link: "https://www.crio.do/projects/react-amazon-clone/",
						},
						{
							heading: "Sorting Visualizer",
							img: WebDev,
							alt: "Sorting Visualizer",
							link: "https://www.crio.do/projects/javascript-sorting-visualiser/",
						},
						{
							heading: "Slack clone",
							img: WebDev,
							alt: "Slack clone",
							link: "https://www.crio.do/projects/react-slack-clone/",
						},
						{
							heading: "Connect4",
							img: WebDev,
							alt: "Connect4",
							link: "https://www.crio.do/projects/python-multiplayer-game-connect4/",
						},
						{
							heading: "Rat in a Maze",
							img: WebDev,
							alt: "Rat in a Maze",
							link: "https://www.crio.do/projects/react-ratinamaze/",
						},
						{
							heading: "FuzzyURLs",
							img: WebDev,
							alt: "FuzzyURLs",
							link: "https://www.crio.do/projects/python-django-url-shortener/",
						},
					],
				},
				{
					heading: "Test your knowledge",
					alt: "test",
					description:
						"Challenges make success simpler, try out these step-guided assessments. Test your skills to look out for your mistakes and be the better version of yourself",
					dataCards: [
						{
							heading: "FreeCodeCamp",
							img: WebDev,
							alt: "freecodecamp",
							link: "https://www.freecodecamp.org/",
						},
						{
							heading: "Frontend Mentor",
							img: WebDev,
							alt: "Frontend Mentor",
							link: "https://www.frontendmentor.io/",
						},
						{
							heading: "100DaysCSS",
							img: WebDev,
							alt: "100DaysCSS",
							link: "https://100dayscss.com/",
						},
						{
							heading: "CSSBattle",
							img: WebDev,
							alt: "CSSBattle",
							link: "https://cssbattle.dev/",
						},
					],
				},
			],
		},
		{
			img: AndroidDev,
			alt: "android_development",
			courseName: "Android Development",
			link: "/resource/domains/android_development",
			data: [
				{
					img: AndroidDev,
					alt: "android_development",
					heading: "Android Development",
					nextAlt: "roadmap",
					description:
						"We've compiled a reference list, a roadmap to follow, the best project ideas, and some entertaining quizzes to test your knowledge for the Android domain.",
				},
				{
					heading: "Roadmap",
					alt: "roadmap",
					description:
						"After evaluating the tech stacks you'll need, build your skills from the ground up. These structured pathways will help you decide what to start first.",
					dataCards: [
						{
							heading: "Basic",
							img: AndroidDev,
							alt: "basic",
							link: "https://roadmap.sh/android",
						},
						{
							heading: "Detailed",
							img: AndroidDev,
							alt: "detailed",
							link: "https://www.androidelements.com/",
						},
					],
				},
				{
					heading: "Resources",
					description:
						"Time saver skill booster efficient video resources to enhance your knowledge. Esteemed and tested channels to start from very basics to advance level with super creativity level.",
					alt: "resources",
					dataCards: [
						{
							heading: "PhilippLackner",
							img: AndroidDev,
							alt: "PhilippLackner",
							link: "https://www.youtube.com/c/PhilippLackner/featured",
							type: "youtube",
						},
						{
							heading: "tutorialsEU",
							img: AndroidDev,
							alt: "tutorialsEU",
							link: "https://www.youtube.com/channel/UCGjv_3tbzJ8yKuvacoqmO-Q",
							type: "youtube",
						},
						{
							heading: "Rahul Pandey",
							img: AndroidDev,
							alt: "Rahul Pandey",
							link: "https://www.youtube.com/c/RahulPandeyrkp",
							type: "youtube",
						},
						{
							heading: "Freecodecamp",
							img: AndroidDev,
							alt: "Freecodecamp",
							link: "https://www.youtube.com/c/Freecodecamp",
							type: "youtube",
						},
						{
							heading: "CodeWithHarry",
							img: AndroidDev,
							alt: "CodeWithHarry",
							link: "https://www.youtube.com/channel/UCeVMnSShP_Iviwkknt83cww",
							type: "youtube",
						},
						{
							heading: "Neat Roots",
							img: AndroidDev,
							alt: "Neat Roots",
							link: "https://www.youtube.com/channel/UCyVD1TyR6Me7Yl7C2F5DMYA",
							type: "Androidsite",
						},
						{
							heading: "Journal Dev",
							img: AndroidDev,
							alt: "Journal Dev",
							link: "https://www.journaldev.com/",
							type: "website",
						},
						{
							heading: "Codepath",
							img: AndroidDev,
							alt: "codepath",
							link: "https://guides.codepath.com/android",
							type: "website",
						},
						{
							heading: "Frontend Masters",
							img: AndroidDev,
							alt: "frontend Masters",
							link: "",
							type: "website",
						},
						{
							heading: "Kotlin",
							img: AndroidDev,
							alt: "kotlin",
							link: "https://kotlinlang.org/",
							type: "website",
						},
						{
							heading: "Typealias",
							img: AndroidDev,
							alt: "typealias",
							link: "https://typealias.com/start/",
							type: "website",
						},
						{
							heading: "Data Flair",
							img: AndroidDev,
							alt: "Data Flair",
							link: "https://data-flair.training/blogs/android-tutorials-home/",
							type: "website",
						},
					],
				},
				{
					heading: "Project Ideas",
					alt: "project_ideas",
					description: "No Description",
					dataCards: [
						{
							heading: "Companion App",
							img: AndroidDev,
							alt: "Companion App",
							link: "https://www.crio.do/projects/flutter-companion-app/",
						},
						{
							heading: "Contact App",
							img: AndroidDev,
							alt: "Contact App",
							link: "https://www.crio.do/projects/java-android-contact-app/",
						},
						{
							heading: "Breakout Ball Game",
							img: AndroidDev,
							alt: "Breakout Ball Game",
							link: "https://www.crio.do/projects/java-breakout-game/",
						},
						{
							heading: "QuizUp",
							img: AndroidDev,
							alt: "QuizUp - A Quiz Application",
							link: "https://www.crio.do/projects/android-java-quiz-application/",
						},
						{
							heading: "Instagram Clone",
							img: AndroidDev,
							alt: "Instagram Clone",
							link: "https://www.crio.do/projects/kotlin-android-instagram-clone/",
						},
						{
							heading: "Notes & Password Manager",
							img: AndroidDev,
							alt: "Notes & Password Manager",
							link: "https://www.crio.do/projects/java-android-notes-password-manager/",
						},
						{
							heading: "Ecommerce platform",
							img: AndroidDev,
							alt: "A Hyperlocal Ecommerce platform",
							link: "https://www.crio.do/projects/flutter-hyperlocal-ecommerce/",
						},
						{
							heading: "bFit",
							img: AndroidDev,
							alt: "bFit-A Cognitive Game",
							link: "https://www.crio.do/projects/java-android-game/",
						},
					],
				},
				{
					heading: "Test your knowledge",
					alt: "test",
					description:
						"Challenges make success simpler, try out these step-guided assessments. Test your skills to look out for your mistakes and be the better version of yourself",
					dataCards: [
						{
							heading: "Tutorials Point",
							img: AndroidDev,
							alt: "Tutorials Point",
							link: "https://www.tutorialspoint.com/android/android_online_test.htm",
						},
						{
							heading: "WsCubetech",
							img: AndroidDev,
							alt: "WsCubetech",
							link: "https://www.wscubetech.com/quiz-test-android",
						},
						{
							heading: "Javatpoint",
							img: AndroidDev,
							alt: "javatpoint",
							link: "https://www.javatpoint.com/android-quiz",
						},
						{
							heading: "Google",
							img: AndroidDev,
							alt: "Google",
							link: "https://developer.android.com/courses/quizzes/android-kotlin-fundamental",
						},
						{
							heading: "Pro Android Dev",
							img: AndroidDev,
							alt: "Pro Android Dev",
							link: "https://proandroiddev.com/android-quiz-1-1f475c7170fd",
						},
						{
							heading: "Career Guru 99",
							img: AndroidDev,
							alt: "Career Guru 99",
							link: "https://career.guru99.com/android-quiz/",
						},
					],
				},
			],
		},
		{
			img: CloudDev,
			alt: "cloud_development",
			courseName: "Cloud Development",
			link: "/resource/domains/cloud_development",
			data: [
				{
					img: CloudDev,
					alt: "cloud_development",
					heading: "Cloud Development",
					nextAlt: "roadmap",
					description:
						"We've compiled a reference list, a roadmap to follow, the best project ideas, and some entertaining quizzes to test your knowledge for the Android domain.",
				},
				{
					heading: "Roadmap",
					alt: "roadmap",
					description:
						"After evaluating the tech stacks you'll need, build your skills from the ground up. These structured pathways will help you decide what to start first.",
					dataCards: [
						{
							heading: "Basic",
							img: CloudDev,
							alt: "basic",
							link: "https://whimsical.com/cloud-support-associate-roadmap-S2unty6W9pqmMRGq77h2jk",
						},
						{
							heading: "Detailed",
							img: CloudDev,
							alt: "detailed",
							link: "https://www.notion.so/Getting-started-with-Cloud-ffbff1b34ca04038abb388a3e8936bb2",
						},
					],
				},
				{
					heading: "Resources",
					alt: "resources",
					description:
						"Time saver skill booster efficient video resources to enhance your knowledge. Esteemed and tested channels to start from very basics to advance level with super creativity level.",
					dataCards: [
						{
							heading: "AWS",
							img: CloudDev,
							alt: "AWS",
							link: "https://www.awseducate.com/registration",
							type: "website",
						},
						{
							heading: "Microsoft",
							img: CloudDev,
							alt: "Microsoft",
							link: "https://docs.microsoft.com/en-ie/learn/",
							type: "website",
						},
						{
							heading: "AWS Reskill",
							img: CloudDev,
							alt: "AWS Reskill",
							link: "https://awsreskill.com/",
							type: "website",
						},
						{
							heading: "Techgig",
							img: CloudDev,
							alt: "Techgig",
							link: "https://www.techgig.com/googlecloud",
							type: "website",
						},
						{
							heading: "Azure",
							img: CloudDev,
							alt: "Azure",
							link: "https://azure.microsoft.com/en-in/",
							type: "website",
						},
						{
							heading: "Coursera",
							img: CloudDev,
							alt: "Coursera",
							link: "https://www.coursera.org/courses?query=gcp",
							type: "website",
						},
					],
				},
				{
					heading: "Test your knowledge",
					alt: "test",
					description:
						"Challenges make success simpler, try out these step-guided assessments. Test your skills to look out for your mistakes and be the better version of yourself",
					dataCards: [
						{
							heading: "Tech Gig",
							img: CloudDev,
							alt: "Tech Gig",
							link: "https://www.techgig.com/googlecloud",
						},
						{
							heading: "Qwiklabs",
							img: CloudDev,
							alt: "Qwiklabs",
							link: "https://www.qwiklabs.com/",
						},
						{
							heading: "Cloud Academy",
							img: CloudDev,
							alt: "Cloud Academy",
							link: "https://cloudacademy.com/blog/test-your-cloud-knowledge-on-aws-azure-or-google-cloud-platform/",
						},
						{
							heading: "KonfHub",
							img: CloudDev,
							alt: "KonfHub",
							link: "https://quiz.konfhub.com/",
						},
					],
				},
			],
		},
		{
			img: AIML,
			alt: "ai_ml",
			courseName: "AI/ML",
			link: "/resource/domains/ai_ml",

			disabled: true,
		},
		{
			img: IOSDev,
			alt: "ios_development",
			courseName: "IOS Development",
			link: "/resource/domains/ios_development",

			disabled: true,
		},
		{
			img: ComingSoon,
			alt: "coming_soon",
			courseName: "More coming Soon....",
			link: "/resource/domains/coming_soon",

			disabled: true,
		},
	],
};

// Core Data
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

// Home Modules
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

// Developer Modules
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

// Degree Modules
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

// Misc Modules
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
