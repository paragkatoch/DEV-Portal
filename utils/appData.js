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
import RoadmapDegree from "../public/assets/roadmap_degree.svg";
import BenefitsDegree from "../public/assets/benefits_degree.svg";

import NetworkMisc from "../public/assets/network_misc.svg";
import AdviceMisc from "../public/assets/advice_misc.svg";
import GrowthMisc from "../public/assets/growth_misc.svg";
import AppMisc from "../public/assets/app_misc.svg";

import ThumbsUp from "../public/assets/developer/thumbsUp.svg";
import ThumbsDown from "../public/assets/developer/thumbsDown.svg";

import GDSC from "../public/assets/developer/opportunities/gdsc.svg";
import Github from "../public/assets/developer/opportunities/github.svg";
import GSOC from "../public/assets/developer/opportunities/gsoc.svg";
import Hacktoberfest from "../public/assets/developer/opportunities/hactoberfest.svg";
import MLH from "../public/assets/developer/opportunities/mlh.svg";
import MLSA from "../public/assets/developer/opportunities/mlsa.svg";
import Upraised from "../public/assets/developer/opportunities/upraised.svg";

import BehanceMisc from "../public/assets/misc/apps/Misc.-behance.svg";
import CodeAcademyMisc from "../public/assets/misc/apps/Misc.-codecademy.svg";
import DataCampMisc from "../public/assets/misc/apps/Misc.-datacamp.svg";
import EncodeMisc from "../public/assets/misc/apps/Misc.-encode.svg";
import ForestMisc from "../public/assets/misc/apps/Misc.-forest.svg";
import GoDutchMisc from "../public/assets/misc/apps/Misc.-godutch.svg";
import GrasshopperMisc from "../public/assets/misc/apps/Misc.-grasshopper.svg";
import IndMoneyMisc from "../public/assets/misc/apps/Misc.-indmoney.svg";
import InstagramMisc from "../public/assets/misc/apps/Misc.-instagram.svg";
import LinkedInMisc from "../public/assets/misc/apps/Misc.-linkedin.svg";
import NotionMisc from "../public/assets/misc/apps/Misc.-notion.svg";
import PintrestMisc from "../public/assets/misc/apps/Misc.-pintrest.svg";
import SmallCaseMisc from "../public/assets/misc/apps/Misc.-smallcase.svg";
import SoloLearnMisc from "../public/assets/misc/apps/Misc.-sololearn.svg";
import TodoistMisc from "../public/assets/misc/apps/Misc.-todoist.svg";
import TrelloMisc from "../public/assets/misc/apps/Misc.-trello.svg";
import TwitterMisc from "../public/assets/misc/apps/Misc.-twitter.svg";
import CanvaMisc from "../public/assets/misc/apps/Misc.-canva.svg";
import WazirxMisc from "../public/assets/misc/apps/Misc.-wazirx.svg";

import CS50Help from "../public/assets/developer/help/cs50.svg";
import AirByteHelp from "../public/assets/developer/help/Discord-airbyte.svg";
import MLHHelp from "../public/assets/developer/help/Discord-mlh.svg";
import PeoplePeopleHelp from "../public/assets/developer/help/Discord-peoplepeople.svg";
import ReactfluxHelp from "../public/assets/developer/help/Discord-reactflux.svg";
import CodingDenHelp from "../public/assets/developer/help/Discord-codingden.svg";
import DOKHelp from "../public/assets/developer/help/dok.svg";
import HactoberfestHelp from "../public/assets/developer/help/hacktoberfest.svg";
import IBMHelp from "../public/assets/developer/help/ibm.svg";
import CodeBuddiesHelp from "../public/assets/developer/help/codebuddies.svg";

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
	title: "Choose your domain of Interest",
	className: "domain",
	courses: [
		{
			img: WebDev,
			pageType: "card-type",
			alt: "web_development",
			title: "Web Dev",
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
					subHeading: "Roadmap",
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
					subHeading: "Resources",
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
					subHeading: "Project Ideas",
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
					subHeading: "Test your knowledge",
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
			pageType: "card-type",
			title: "Android Dev",
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
					subHeading: "Roadmap",
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
					subHeading: "Resources",
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
					subHeading: "Project Ideas",
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
					subHeading: "Test your knowledge",
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
			pageType: "card-type",
			title: "Cloud Dev",
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
					subHeading: "Roadmap",
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
					subHeading: "Resources",
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
					subHeading: "Test your knowledge",
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
			pageType: "card-type",
			title: "AI/ML",
			link: "/resource/domains/ai_ml",

			disabled: true,
		},
		{
			img: IOSDev,
			alt: "ios_development",
			pageType: "card-type",
			title: "IOS Dev",
			link: "/resource/domains/ios_development",

			disabled: true,
		},
		{
			img: ComingSoon,
			alt: "coming_soon",
			title: "Coming Soon",
			link: "/resource/domains/coming_soon",

			disabled: true,
		},
	],
};

// Core Data
export const CoreData = {
	title: "Explore CORE of your interest",
	className: "core",
	courses: [
		{
			img: DSAlgo,
			alt: "data structures and algorithm",
			title: "DS and Algo",
			link: "/resource/core/ds_algo",
		},
		{
			img: ADA,
			alt: "analysis and design of algorithm",
			title: "ADA",
			link: "/resource/core/ada",
		},
		{
			img: CyberSecurity,
			alt: "cyber security",
			title: "Cyber Security",
			link: "/resource/core/cyber_security",
		},
		{
			img: SystemDesign,
			alt: "system design",
			title: "System Design",
			link: "/resource/core/system_design",
		},
		{
			img: Maths,
			alt: "maths",
			title: "Maths",
			link: "/resource/core/maths",
		},
		{
			img: CSO,
			alt: "cso",
			title: "CSO",
			link: "/resource/core/cso",
		},
		{
			img: OS,
			alt: "operating system",
			title: "OS",
			link: "/resource/core/operating_system",
		},
		{
			img: TOC,

			alt: "theory of computation",
			title: "TOC",
			link: "/resource/core/toc",
		},
		{
			img: DBMS,
			alt: "database and management system",
			title: "DBMS",
			link: "/resource/core/dbms",
		},
		{
			img: OOPS,
			alt: "oops",
			title: "OOPS",
			link: "/resource/core/oops",
		},
		{
			img: ComingSoon,
			alt: "coming soon",
			title: "Coming Soon",
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
		title: "Upcoming Programs/Opportunities",
		desc: "Picking up to the best opportunity is an asset.\nWe've covered some of the eminent programs that can take you to the glory.",
		img: UpcomingDeveloper,
		className: "upcoming_programs",
		alt: "opportunities",
		kickoff: "Find Out",
		url: "/developer/opportunities",
		courses: [
			{
				title: "GSOC",
				alt: "GSOC",
				link: "https://summerofcode.withgoogle.com/",
				img: GSOC,
			},
			{
				alt: "GDSC",
				title: "GDSC",
				link: "https://developers.google.com/community/gdsc/leads",
				img: GDSC,
			},
			{
				alt: "MLSA",
				title: "MLSA",
				link: "https://developers.google.com/community/gdsc/leads",
				img: MLSA,
			},
			{
				alt: "MLH",
				title: "MLH",
				link: "https://fellowship.mlh.io/",
				img: MLH,
			},
			{
				alt: "Hactober Fest",
				title: "Hactober Fest",
				link: "https://hacktoberfest.digitalocean.com/",
				img: Hacktoberfest,
			},
			{
				alt: "Upraised",
				title: "Upraised",
				link: "https://www.upraised.co/embark",
				img: Upraised,
			},
			{
				img: Github,
				alt: "GitHub Ext.",
				title: "GitHub Ext.",
				link: "https://externship.github.in/",
			},
			{
				img: ComingSoon,
				alt: "coming_soon",
				title: "More coming Soon....",
				link: "/resource/domains/coming_soon",

				disabled: true,
			},
		],
	},
	{
		title: "Where to find help",
		desc: "Ever find yourself trapped in a difficulty while working with a new technology? Access the best of the public forms for help!",
		img: HelpDeveloper,
		alt: "find help",
		pageType: "list-button-type",
		kickoff: "Let's Go",
		url: "/developer/find-help",
		data: [
			{
				heading: "Where to find help!",
				description:
					"Top active channels for networking and the best solutions for your upcoming queries. Get excited about rewards and greater opportunities that come along with them.",
				alt: "find_help",
				nextAlt: "discord",
				kickOff: "Lets find out",
			},
			{
				subHeading: "Discord Servers",
				description:
					"Do you ever find yourself in a situation and feel compelled to help others? Join the greatest networking chances with Discord servers and add some fun activities to your learning hustle alongside getting help and helping others.",
				alt: "discord",
				link: "/resource/find-help/discord",
				kickOff: "Explore them",
				courses: [
					{
						img: CodingDenHelp,
						alt: "the_coding_den",
						title: "The Coding Den",
						link: "https://discord.com/invite/code",
					},
					{
						img: ReactfluxHelp,
						alt: "reactiflux",
						title: "Reactiflux",
						link: "https://discord.gg/reactiflux",
					},
					{
						img: HactoberfestHelp,
						alt: "hacktoberfest",
						title: "HacktoberFest",
						link: "https://discord.com/invite/hacktoberfest",
					},
					{
						img: MLHHelp,
						alt: "mlh",
						title: "MLH",
						link: "https://discord.com/invite/mlh",
					},
					{
						img: CS50Help,
						alt: "cs50",
						title: "CS 50",
						link: "https://discord.com/invite/cs50",
					},
				],
			},
			{
				subHeading: "Slack Channels",
				description:
					"Join Slack Channels for the best networking opportunities and to add some fun activities to your learning journey while obtaining aid and helping others. Join the glory here by asking the experts, assisting newbies, and growing alongside others.",
				alt: "slack",
				link: "/resource/find-help/slack",
				kickOff: "Explore them",
				courses: [
					{
						img: PeoplePeopleHelp,
						alt: "people_people",
						title: "People-People",
						link: "https://join.slack.com/t/people-people/shared_invite/zt-yx0jb4h0-nA83VQROc5UjW~i13yJ6Mw",
					},
					{
						img: CodeBuddiesHelp,
						alt: "code_buddies",
						title: "Code Buddies",
						link: "https://join.slack.com/t/codebuddies/shared_invite/zt-5qw5abuu-w~uBmSCv4hlA3Svq~oHDiw",
					},
					{
						img: DOKHelp,
						alt: "dok",
						title: "DOK",
						link: "https://join.slack.com/t/dokcommunity/shared_invite/zt-g3ui5r0g-jDKz5dhh2W1ayElqwKYYAg",
					},
					{
						img: AirByteHelp,
						alt: "airbytehq",
						title: "Air Byte",
						link: "https://join.slack.com/t/airbytehq/shared_invite/zt-ylm7owy8-hFjNm_Czb8FC455cMh75EQ",
					},
					{
						img: IBMHelp,
						alt: "ibm",
						title: "IBM",
						link: "https://join.slack.com/t/ibmdevelopercommunity/shared_invite/zt-mfzblbcm-ppkowx0i3vfKBngvjODKhg",
					},
				],
			},
			{
				subHeading: "Twitter",
				description:
					"Twitter connects a lot more stuff than it appears. Duh! I've got your back, so let's talk about it in a tweet. Twitter is an all-in-one platform for getting information, learning new things, spreading awareness, and connecting with professionals.",
				alt: "twitter",
				link: "https://leif.me/how-software-developers-use-twitter/",
				kickOff: "Find Out",
			},
			{
				subHeading: "Reddit",
				description:
					"Reddit is an amazing resource for beginner programmers. It's a goldmine of references to valuable materials and a place where a lot of great folks gather to give each other feedback.",
				alt: "reddit",
				link: "https://dev.to/blorente/reddit-for-programmers-4ejk",
				kickOff: "Find Out",
			},
			{
				subHeading: "Stack Exchange",
				description:
					"Stated another way, Stack Overflow questions almost all have actual source code in the questions or answers. It’s much rarer (though certainly OK) for a Programmers question to contain source code.",
				alt: "stack_exchange",
				link: "https://stackoverflow.blog/2010/12/17/introducing-programmers-stackexchange-com/",
				kickOff: "Find Out",
			},
			{
				subHeading: "Google",
				description:
					"Don't act as if you know everything unless your name is Google. Googling is a skill that can get you anything and make you money out of nothing. Mountains are required, long staircases do not produce good hikers. As a result, you must learn how to Google the information, and you will quickly rise to the top.",
				alt: "google",
				link: "https://betterprogramming.pub/11-tricks-to-master-the-art-of-googling-as-a-software-developer-2e00b7568b7d?gi=bfd96acde91c",
				kickOff: "Find Out",
			},
		],
	},
	{
		title: "Do's and Don'ts",
		desc: "New exposures are like two sides of a coin, therefore it's best to be prepared. Check out some Do's and Don'ts for a fresher.",
		img: DoDontDeveloper,
		alt: "people busy in mobile device",
		kickoff: "Show Me",
		pageType: "list-type",
		url: "/developer/do-dont",
		data: [
			{
				alt: "dos_donts",
				heading: "Do's and Dont's",
				nextAlt: "dos",
				description:
					"We've compiled a reference list, a roadmap to follow, the best project ideas, and some entertaining quizzes to test your knowledge for the Web domain.",
			},
			{
				img: ThumbsUp,
				alt: "dos",
				subHeading: "Do's",
				children: [
					{
						title: "Learn to budget",
						description:
							"Everyone enjoys spending money, but only a few people understand and are taught how to do so responsibly. From the beginning of student life, one must learn to stay within the monthly limit. It not only gives you a sense of security, but it also gives us peace of mind knowing that we can deal with any unforeseen circumstance.",
					},
					{
						title: "Choose docs over videos",
						description:
							"Watching videos takes longer than reading documentation, and the material is organized in a way that you get to the point information quickly. You can waste time watching video lectures at 2x speed, but advertising, promotion material, and slipping into the zone all lead to a waste of time. Documentation is the most recent version of a tech stack, whereas video may be outdated.",
					},
					{
						title: "Make time to exercise",
						description:
							"Working for hours to achieve greatness sounds really reasonably, Investing time to develop abilities is excellent. Following that, you must make it a habit to exercise every day. Making yourself fit will help you think positively and be more efficient than before, as a healthy mind lives in a healthy body. The ideal life is when your mind, hand, and body are in sync, and you take time away from the screen to invest in your body.",
					},
					{
						title: "Apply for scholarships",
						description:
							"Everything is available for free on the Internet, including some hacks that can lead you to a magnificent environment. Scholarships are a brilliant example of this, as they allow students to learn and grow without thinking of the financial aspect. Visit the opportunities section of our website to see what's new. Take advantage of the premium courses that are specifically designed to put you in the prominent position you deserve.",
					},
					{
						title: "Interact with seniors and alumni",
						description:
							"Experience is a valuable asset that can be earned over time. A mentor or fellow will assist you in improving your skill by advising you on how to achieve your aim and what measures to follow. A senior or alumni with a wealth of knowledge will tell you what steps to avoid and what not to do, which can only be learned via experience. Interact as much as possible with your seniors. It's a free package that can help you shine.",
					},
					{
						title: "Set Goals",
						description:
							"Even animals have a daily aim of feeding themselves, and you're here working without one because everyone else is. Analyze your habits, seek guidance, and take part in public forums to gain a deeper understanding of the aim you want to achieve. If you have a dream job in mind, ask someone who already has one; it will be an eye-opening moment for you. You may change your mind, or you could begin working on particular tasks to help you get closer to your aim. If you have a goal, you must safeguard it by setting regular reminders, tracking your progress, and striving to be a better version of yourself. You are your only competitor aiming for being better than yesterday.",
					},
					{
						title: "Prioritize",
						description:
							"If that party is truly beneficial to attend, and if you truly want to engage in that program, don't join just because all of your friends are. Ask yourself these questions and prioritize your job. Also, incorporate the DISC model into your life (you may find it on YouTube) and prioritize your work. Do what improves your talents. Going to a party is fun, provides a respite, and helps to relax your thoughts. However, frequent partying will cause distractions. Prioritize your daily tasks and adopt what leads to achievement.",
					},
					{
						title: "Organize",
						description:
							"You procrastinated again since you were swamped with work and had several deadlines to meet. Feeling guilty about not being able to achieve your goal. This happens because you haven't prioritized your tasks, which can only be done if you know how to manage your work. Make a to-do list instead of a timetable and don't forget to make a not-to-do list. Making a to-do list prioritizes your work, but making a not-to-do list prioritizes your time.",
					},
					{
						title: "Have a small circle of friends",
						description:
							"Always be the first to speak, as this enhances your self-esteem. This will work if you're social, but don't go about telling everyone you're an introvert because you don't like to talk. Make a limited group of acquaintances who can bring you up when you're at your low. Making friends with more experience, say 4-5 years older than you, would be ideal, but if your ideas coincide with those of your friends, that's the icing on the cake.",
					},
					{
						title: "Make a habit of reading",
						description:
							"The more you explore, the more you learn, the more you learn, the more you grow. Books are ideal for growth at all ages. However, reading on electronic devices is not encouraged, as the goal is to take a break from the screen. Reading good novels by well-known authors might help you improve your vocabulary and communication abilities. Reading books enhances focus and builds patience. Choose works that have an impact, such as Rich Dad Poor Dad and Ikagai. The books you read should apply to your life, abilities, and goals.",
					},
				],
			},
			{
				img: ThumbsDown,
				alt: "donts",
				subHeading: "Dont's",
				children: [
					{
						title: "Tutorial Hell",
						description:
							"Don't make the mistake of viewing countless lectures and being a stickler for details. Instead, focus on honing your skills in the hands-on area. You can't study everything at once, concentrate on one thing at a time, and divide large undertakings into the crux.",
					},
					{
						title: "Certificate Collection",
						description:
							"Attending many workshops should never be misinterpreted for discovery. Every day, tens of thousands of workshops are conducted, find the one that is right for you. Joining a program just for the sake of certification is clearly a bad idea, regardless of whether you earn money from the program or expand your network.",
					},
					{
						title: "Building in secret",
						description:
							"Open Source is the most valuable asset introduced to the field of technology since it allows you to collaborate and learn with others. Don't keep your efforts to yourself, show them out to others. You've worked so hard to get where you are, and if you open-source your work, your chances of landing a better spot expand exponentially.",
					},
					{
						title: "Sticking to one tech",
						description:
							"Whether it's in people or tech stack, diversity is always helpful. Learn and explore relevant tech stacks to be an asset to your team. This will open multiple doors to greatness. There's no need to be an expert at everything. The goal is to help yourself excel. ",
					},
					{
						title: "Skipping core subjects",
						description:
							"The stronger is the Foundation the more it lasts. To broaden your thinking space, learn the core subjects of your discipline. Allow your brain greater room to explore and never neglect the core subjects, as these are the foundations. ",
					},
					{
						title: "FAANG only mindset",
						description:
							"A limited perspective never evolves, and a fixed mindset only degrades. Money is a basic need, and the desire to earn much is admirable, yet there are several organizations that pay significantly more than FAANG. Never set limits for yourself. Instead, work on improving your skills and learning to cater to the community.",
					},
					{
						title: "No extra curricular",
						description:
							"Getting into college is a wonderful experience, leaning into studies is good. But don't forget to participate in extracurricular activities, now is the perfect time to do so. Participate in offline hackathons to improve networking, travel chances, and win cash prizes. Build your communities, or at the very least engage in a variety of community events, to gain industrial experience as a student.",
					},
					{
						title: "Comparing yourself with others",
						description:
							"The probability of two individuals sharing the same fingerprints is 1 in 64 billion and here you're comparing yourself with others. Examine how you can be a better version of yourself, keep track of your progress, reward yourself regularly for your achievements, and most important of all, introspect at least once a week.",
					},
					{
						title: "Poor communication skills",
						description:
							"You may always have the information and talent, but how will you demonstrate them if you don't know how to convey it? Going all out and allowing yourself to be embarrassed once in a while is the best method to get rid of shyness and poor self-esteem. This strategy will substantially increase your self-confidence and soft skills.",
					},
					{
						title: "Don't be afraid to ask for help",
						description:
							"'He who asks questions is a fool for five minutes, he who doesn't remain a fool forever'. If you get stuck at any stage, don't be afraid to ask for help. While it may seem foolish, everyone requires help at some point in life.",
					},
				],
			},
		],
	},
];

// Degree Modules
export const DegreeModules = [
	{
		title: "Keep Core in line",
		desc: "Top-rated core subjects with resources, roadmaps, and handouts for acing the interviews.",
		img: CoreDegree,
		alt: "core subjects",
		kickoff: "Let's Go",
		url: "/degree/core",
	},
	{
		title: "Roadmap 1st to 8th Sem",
		desc: "After evaluating the tech stacks you'll need, build your skills from the ground up. These structured pathways will help you decide what to start first.",
		img: RoadmapDegree,
		alt: "roadmap 1st to 8th sem",
		kickoff: "Check Out!",
		url: "https://whimsical.com/roadmap-from-1st-to-8th-semester-XkmVWQaGp8DdzyVCo5fc7s",
	},
	{
		title: "Competitive Programming",
		desc: "Along with a slew of other geeks from around the world, set a daily goal to improve. The best strategy to begin CP and improve your problem solving ability.",
		img: CPDegree,
		alt: "competitive programming",
		kickoff: "Find Out!",
		url: "/core/competitive",
	},
	{
		title: "Benefits of being a student",
		desc: "As a student, you have access to several complementary services that will aid you in your technical journey. Find all of them curated in one place.",
		img: BenefitsDegree,
		alt: "benefits of a student",
		kickoff: "Let's Go",
		pageType: "link-card-type",
		url: "/degree/benefits",
		data: [
			{
				heading: "Student Benefits",
				description:
					"As a student, you have access to several complementary services that will aid you in your technical journey. Find all of them curated in one place.",
				alt: "student_benefits",
				nextAlt: "subscriptions",
				kickOff: "Explore",
			},
			{
				subHeading: "Subscriptions",
				description: "",
				alt: "subscriptions",
				contents: [
					{
						img: BenefitsDegree,
						title: "GitHub SP",
						link: "https://education.github.com/pack",
						alt: "gitHub_student_pack",
					},
					{
						img: BenefitsDegree,
						title: "Auto-Desk",
						link: "https://www.autodesk.com/education/edu-software/overview",
						alt: "auto_desk",
					},
					{
						img: BenefitsDegree,
						title: "Jetbrains",
						link: "https://www.jetbrains.com/education/",
						alt: "jetbrains",
					},
					{
						img: BenefitsDegree,
						title: "Amazon Prime",
						link: "https://www.amazon.in/amazonprime",
						alt: "amazon_prime",
					},
					{
						img: BenefitsDegree,
						title: "Spotify",
						link: "https://www.spotify.com/in-en/student/",
						alt: "spotify",
					},
				],
			},
			{
				subHeading: "Discounts",
				description: "",
				alt: "discounts",
				contents: [
					{
						img: BenefitsDegree,
						title: "Apple",
						link: "https://www.apple.com/in/shop/education-pricing",
						alt: "apple",
					},
					{
						img: BenefitsDegree,
						title: "Samsung",
						link: "https://www.samsung.com/in/microsite/student-advantage/",
						alt: "samsung",
					},
					{
						img: BenefitsDegree,
						title: "UniDays",
						link: "https://www.myunidays.com/IN/en-IN",
						alt: "uni_days",
					},
					{
						img: BenefitsDegree,
						title: "Indigo",
						link: "https://www.goindigo.in/add-on-services/student-discount.html",
						alt: "indigo",
					},
					{
						img: BenefitsDegree,
						title: "SheerId",
						link: "https://www.sheerid.com/shoppers/studentdeals/",
						alt: "sheer_id",
					},
				],
			},
			{
				subHeading: "Scholarships",
				description: "",
				alt: "scholarships",
				contents: [
					{
						img: BenefitsDegree,
						title: "NSP",
						link: "https://scholarships.gov.in/",
						alt: "NSP",
					},
					{
						img: BenefitsDegree,
						title: "Buddy4Study",
						link: "https://www.buddy4study.com/",
						alt: "buddy_4_study",
					},
				],
			},
		],
	},
];

// Misc Modules
export const MiscModules = [
	{
		title: "Networking",
		desc: "We've got you covered if you want to connect with industry experts and meet some like-minded individuals.",
		img: NetworkMisc,
		alt: "networking between the world",
		kickoff: "Let's Go",
		url: "/misc/networking",
		pageType: "list-button-type",
		data: [
			{
				heading: "Networking",
				description:
					"We've got you covered if you want to connect with industry experts and meet some like-minded individuals.",
				alt: "networking",
				nextAlt: "linkedin_connection",
				kickOff: "Let's do it!",
			},
			{
				subHeading: "How to make a LinkedIn connection?",
				description:
					"Remember, the more first-degree connections you have, the more second-and third-degree connections you have, making you literally one connection away from millions of people.",
				alt: "linkedin_connection",
				link: "https://www.socialmediaexaminer.com/8-ways-to-grow-your-linkedin-connections",
				kickOff: "Read More!",
			},
			{
				subHeading: "How to write an email to a recruiter?",
				description:
					"A very important part of our professional careers is getting hired for the positions that we desire. To do that, the initial step is to contact recruiters by writing emails that will elicit the response that we are looking for.",
				alt: "write_email",
				link: "https://www.softwaretestinghelp.com/write-an-email-to-a-recruiter",
				kickOff: "Read More!",
			},
		],
	},
	{
		title: "Financial Advice",
		desc: "It's far easier to make money than it is to manage and invest it effectively. Do you want to understand how to manage your own finances? The skill they did not teach you in high school or college.",
		img: AdviceMisc,
		alt: "financial advices",
		kickoff: "Find Out",
		url: "/misc/financial-advice",
		pageType: "list-button-type",
		data: [
			{
				heading: "Financial Advice",
				description:
					"It's far easier to make money than it is to manage and invest it effectively. Do you want to understand how to manage your own finances? The skill they did not teach you in high school or college.",
				alt: "financial_advice",
				nextAlt: "budgeting",
				kickOff: "Find Out!",
			},
			{
				subHeading: "Budgeting",
				description:
					"While you would be forgiven for being nose-deep in your books, it’s time to take a minute to reflect on how you’re managing your money. Do you have a budget? Or are you spending on the go?",
				alt: "budgeting",
				link: "https://students.ubc.ca/ubclife/21-money-saving-tips-tricks",
				kickOff: "Read More!",
			},
			{
				subHeading: "Stocks",
				description:
					"When people refer to the stock market, they are referring to several things and several exchanges where stocks are bought and sold. Broadly, the stock market is the aggregate of those stocks trading publicly, those that anyone can readily purchase on an exchange.",
				alt: "stocks",
				link: "https://www.bankrate.com/investing/stock-market-basics-for-beginners/",
				kickOff: "Read More!",
			},
		],
	},
	{
		title: "Personal Growth",
		desc: "Start forming these habits in order to improve your skills and become a better version of yourself. Use social media to your advantage and ace your interviews and meetup with exceptionally great people.",
		img: GrowthMisc,
		alt: "personal growth",
		kickoff: "Let's Go",
		url: "/misc/personal-growth",
		pageType: "list-button-type",
		data: [
			{
				heading: "Personal Growth",
				description:
					"Start forming these habits in order to improve your skills and become a better version of yourself. Use social media to your advantage and ace your interviews and meetup with exceptionally great people.",
				alt: "personal_growth",
				nextAlt: "resume_building",
				kickOff: "Let's Grow!",
			},
			{
				subHeading: "Resume Building",
				description:
					"When applying for jobs, it's important to be fearless and show employers that you are a confident and qualified candidate. Having skills is important you must have something to show your skills. See here for some tips to beautify your resume. ",
				alt: "resume_building",
				link: "https://whimsical.com/placement-resume-checklist-by-love-babbar-QR1e9NcVXoNifZn4UBY649",
			},
			{
				subHeading: "Soft-Skills",
				description:
					"To stand out in this competitive world, a student is required to hone many skills and abilities which is not a one-day job. A student needs to carve out these skills by practicing every day and this takes a long time.",
				alt: "soft-skills",
				link: "https://www.careerindia.com/tips/8-soft-skills-that-students-need-develop-today-020054.html",
				kickOff: "Read More!",
			},
			{
				subHeading: "How to use LinkedIn properly?",
				description:
					"Think of LinkedIn as your resume that never sleeps. But a lot more. It's your professional brand in the world. It’s the result you actually want up top when someone Googles you",
				alt: "linkedin_properly",
				link: "https://www.linkedin.com/pulse/10-tips-students-new-grads-linkedin-omar-garrio",
			},
			{
				subHeading: "Mock Interview",
				description:
					"Interviews can be nerve-wracking affairs. The simplest questions that you did not prepare for can catch you off guard and ruin the flow of the conversation. Start giving interviews to prepare better.",
				link: "https://www.careerindia.com/tips/8-soft-skills-that-students-need-develop-today-020054.html",
				alt: "mock_interview",
			},
		],
	},
	{
		title: "Must-have apps ",
		desc: "If you spend most of your time on your phone, check out some of the best apps, you must have to be more productive.",
		img: AppMisc,
		alt: "must apps to have",
		kickoff: "Show Me",
		url: "/misc/apps",
		pageType: "link-card-type",
		data: [
			{
				alt: "must_apps",
				heading: "Must have apps",
				nextAlt: "productivity",
				kickoff: "Find Out!",
				description:
					"Top-rated apps to help you on your technical journey to improve your skills, invest in yourself and take control of your life from your pocket.",
			},
			{
				subHeading: "Productivity",
				alt: "productivity",
				description:
					"Top-rated apps to help you on your technical journey to improve your skills, invest in yourself and take control of your life from your pocket.",
				contents: [
					{
						img: TodoistMisc,
						title: "Todoist",
						link: "https://play.google.com/store/apps/details?id=com.todoist",
						alt: "todoist",
					},
					{
						img: NotionMisc,
						title: "Notion",
						link: "https://play.google.com/store/apps/details?id=notion.id",
						alt: "notion",
					},
					{
						img: TrelloMisc,
						title: "Trello",
						link: "https://play.google.com/store/apps/details?id=com.trello&hl",
						alt: "trello",
					},
					{
						img: CanvaMisc,
						title: "Canva",
						link: "https://play.google.com/store/apps/details?id=com.canva.editor",
						alt: "canva",
					},
					{
						img: ForestMisc,
						title: "Forest",
						link: "https://play.google.com/store/apps/details?id=cc.forestapp",
						alt: "forest",
					},
				],
			},
			{
				subHeading: "Personal Branding",
				alt: "personal_branding",
				description:
					"Top-rated apps to help you on your technical journey to improve your skills, invest in yourself and take control of your life from your pocket.",
				contents: [
					{
						img: LinkedInMisc,
						title: "LinkedIn",
						link: "https://play.google.com/store/apps/details?id=com.linkedin.android",
						alt: "linkedIn",
					},
					{
						img: InstagramMisc,
						title: "Instagram",
						link: "https://play.google.com/store/apps/details?id=com.instagram.android",
						alt: "instagram",
					},
					{
						img: BehanceMisc,
						title: "Behance",
						link: "https://play.google.com/store/apps/details?id=com.behance.behance",
						alt: "behance",
					},
					{
						img: TwitterMisc,
						title: "Twitter",
						link: "https://play.google.com/store/apps/details?id=com.twitter.android",
						alt: "twitter",
					},
					{
						img: PintrestMisc,
						title: "Pinterest",
						link: "https://play.google.com/store/apps/details?id=com.pinterest",
						alt: "pinterest",
					},
				],
			},
			{
				subHeading: "Programming",
				alt: "programming",
				description:
					"Top-rated apps to help you on your technical journey to improve your skills, invest in yourself and take control of your life from your pocket.",
				contents: [
					{
						img: CodeAcademyMisc,
						title: "Codecademy Go",
						link: "https://play.google.com/store/apps/details?id=com.ryzac.codecademygo",
						alt: "codecademy_go",
					},
					{
						img: SoloLearnMisc,
						title: "Solo Learn",
						link: "https://play.google.com/store/apps/details?id=com.sololearn",
						alt: "solo_learn",
					},
					{
						img: DataCampMisc,
						title: "Data Camp",
						link: "https://play.google.com/store/apps/details?id=com.datacamp",
						alt: "data_camp",
					},
					{
						img: GrasshopperMisc,
						title: "GrassHopper",
						link: "https://play.google.com/store/apps/details?id=com.area120.grasshopper",
						alt: "grass_hopper",
					},
					{
						img: EncodeMisc,
						title: "Encode",
						link: "https://play.google.com/store/apps/details?id=com.upskew.encode",
						alt: "encode",
					},
				],
			},
			{
				subHeading: "Finance",
				alt: "finance",
				description:
					"Top-rated apps to help you on your technical journey to improve your skills, invest in yourself and take control of your life from your pocket.",
				contents: [
					{
						img: IndMoneyMisc,
						title: "IndMoney",
						link: "https://indmoney.onelink.me/RmHC/d9995644",
						alt: "ind_money",
					},
					{
						img: GoDutchMisc,
						title: "GoDutch",
						link: "https://invite.godutchpay.in/UT3J4Y",
						alt: "go_dutch",
					},
					{
						img: WazirxMisc,
						title: "WazirX",
						link: "https://wazirx.com/invite/36j4su6s",
						alt: "wazir_x",
					},
					{
						img: SmallCaseMisc,
						title: "SmallCase",
						link: "https://link.smallcase.com/LjxzkmF9Alb",
						alt: "small_case",
					},
				],
			},
		],
	},
];
