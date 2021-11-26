const withImages = require("next-images");

module.exports = withImages();

module.exports = {
	reactStrictMode: true,
	env: {
		PUBLIC_URL: "https://dev--portal.vercel.app",
	},
	i18n: {
		locales: ["en-US"],
		defaultLocale: "en-US",
	},

	pageExtensions: ["page.js", "page.jsx"],
};
