module.exports = async function(eleventyConfig) {
    // Behalte die Originaldateinamen bei und erstelle keine Verzeichnisse für die Seiten
    eleventyConfig.addGlobalData("permalink", () => {
        return (data) =>
            `${data.page.filePathStem}.${data.page.outputFileExtension}`;
    });

    // Behalte Dateien
    eleventyConfig.addPassthroughCopy("server.js");
    eleventyConfig.addPassthroughCopy("confetti.browser.min.js");
    eleventyConfig.addPassthroughCopy("global.css");
    eleventyConfig.addPassthroughCopy("fonts");
    // ignoriere ToDo.md-Datei
    eleventyConfig.ignores.add("ToDo.md");

    // CSS-Bundle für jede Seite erstellen,
    // damit keine seitenspezifischen CSS-Dateien benötigt werden
    eleventyConfig.addBundle("css");
};