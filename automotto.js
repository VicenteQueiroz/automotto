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

    // Timememotto home
    await click("Timer");
    await click(into($("//button[@name='ClockInStatus1']")));
    await clearPermissionOverrides();
    // Launchs the REPL after executing
    // the commands above

    await repl();
  } catch (error) {
    console.error(error);
  } finally {
    closeBrowser();
  }
})();

{
  /* <button name="ClockInStatus1" class="clockinstatusbutton red" value="1">Stop</button>

<button name="ClockInStatus1" class="clockinstatusbutton green" value="0">Start</button> */
}
