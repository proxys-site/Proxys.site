require('dotenv').config();

module.exports = function (eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // Watch for changes
  eleventyConfig.addWatchTarget("src/assets/");
  eleventyConfig.addWatchTarget("src/css/");

  // Passthrough copies
  eleventyConfig.addPassthroughCopy({ "src/public": "/" });
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "html", "md"],
    // Cloudflare Pages works best with .html files for Pretty URLs
    // e.g. /about.html -> /about
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    pathPrefix: "/",
    trailingSlash: false
  };
};
