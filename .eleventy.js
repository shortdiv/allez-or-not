const { minify } = require("terser");

module.exports = (eleventyConfig) => {
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "src/_site"
    }
  }
};