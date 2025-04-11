export default async function(eleventyConfig) {
	eleventyConfig.setInputDirectory("./src");
	eleventyConfig.setOutputDirectory("./public");

	eleventyConfig.addPassthroughCopy("./src/assets");
	eleventyConfig.addPassthroughCopy("./src/admin/config.yml");

	eleventyConfig.setIncludesDirectory("../template");
	
	return {
		
	}
};
