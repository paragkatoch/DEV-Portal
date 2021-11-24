const withImages = require("next-images");

module.exports = withImages();

module.exports = {
	reactStrictMode: true,

	i18n: {
		locales: ["en-US"],
		defaultLocale: "en-US",
	},

	pageExtensions: ["page.js", "page.jsx"],
};
