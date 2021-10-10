export const APP = {
	NAME: "OneDevPlace",
	EMAIL: "Kamra103@gmail.com",
	CONTACT_NO: "confidential",
};

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
