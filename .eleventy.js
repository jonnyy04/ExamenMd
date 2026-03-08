const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
	eleventyConfig.addPassthroughCopy("src/img");
	eleventyConfig.addPassthroughCopy("src/styles.css");
	eleventyConfig.addPassthroughCopy("src/admin");

	return {
		pathPrefix: process.env.PATH_PREFIX || "/",
		dir: {
			input: "src",
			output: "dist",
		},
	};
};
