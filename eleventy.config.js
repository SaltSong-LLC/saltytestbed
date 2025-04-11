export default async function(eleventyConfig) {
	eleventyConfig.setInputDirectory("./src");
	eleventyConfig.setOutputDirectory("./public");

	eleventyConfig.addPassthroughCopy("./src/assets");

	eleventyConfig.setIncludesDirectory("../template");
	
	return {
		
	}
};
