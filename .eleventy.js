const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

	eleventyConfig.addFilter("localeString", function (value) {
		return Number(value).toLocaleString("ro-RO");
	});

	eleventyConfig.addPassthroughCopy("src/img");
	eleventyConfig.addPassthroughCopy("src/styles.css");
	eleventyConfig.addPassthroughCopy("src/admin");

	eleventyConfig.addCollection("courses", function (collectionApi) {
		return collectionApi.getFilteredByGlob("src/courses/*.md").sort((a, b) => {
			return (a.data.order || 0) - (b.data.order || 0);
		});
	});

	eleventyConfig.addCollection("teachers", function (collectionApi) {
		return collectionApi.getFilteredByGlob("src/teachers/*.md").sort((a, b) => {
			return (a.data.order || 0) - (b.data.order || 0);
		});
	});

	eleventyConfig.addCollection("reviews", function (collectionApi) {
		return collectionApi.getFilteredByGlob("src/reviews/*.md").sort((a, b) => {
			return (a.data.order || 0) - (b.data.order || 0);
		});
	});

	return {
		pathPrefix: process.env.PATH_PREFIX || "/",
		dir: {
			input: "src",
			output: "dist",
		},
	};
};
