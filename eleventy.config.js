module.exports = async function(eleventyConfig) {
    // Behalte die Originaldateinamen bei und erstelle keine Verzeichnisse für die Seiten
    eleventyConfig.addGlobalData("permalink", () => {
        return (data) =>
            `${data.page.filePathStem}.${data.page.outputFileExtension}`;
    });

    // Behalte Dateien
    eleventyConfig.addPassthroughCopy("server.js");
    eleventyConfig.addPassthroughCopy("confetti.browser.min.js");
    eleventyConfig.ignores.add("ToDo.md");
};