const { openBrowser, goto, write, click, into, repl } = require("taiko");
const { email, password } = require("./credentials");

(async () => {
  try {
    await openBrowser();
    console.log("Hello Taiko!!");
    console.log(email, password);
    await goto("https://app.timemoto.com/");
    await write(email, into(textBox({ id: "form-login-email" })));
    await write(password, into(textBox({ id: "form-login-password" })));
    await click("Login");

    // Launchs the REPL after executing
    // the commands above

    await repl();
  } catch (error) {
    console.error(error);
  } finally {
    closeBrowser();
  }
})();
