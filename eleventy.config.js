import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default async function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy(
        {"src/assets/": "/assets/"},
    );

    eleventyConfig.addShortcode("currentBuildDate", () => {
		return (new Date()).toISOString();
	});

    eleventyConfig.addPlugin(syntaxHighlight);
};

export const config = {
    dir: {
        input: "src",
        output: "dist",
    },

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
}