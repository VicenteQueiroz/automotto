const { openBrowser, goto, write, click, repl } = require("taiko");
(async () => {
  try {
    await openBrowser();
    await goto("https://app.timemoto.com/");
    await write("taiko test automation");
    //await click("Google Search");

    // Launchs the REPL after executing
    // the commands above

    await repl();
  } catch (error) {
    console.error(error);
  } finally {
    closeBrowser();
  }
})();
