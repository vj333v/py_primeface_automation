// features/step_definitions/example.steps.js
const { Given, Then } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

Given("I open the PrimeFaces homepage", async function () {
  this.browser = await chromium.launch();
  this.page = await this.browser.newPage();
  await this.page.goto("https://www.primefaces.org/");
});

Then("I should see the PrimeFaces title", async function () {
  const title = await this.page.title();
  if (title !== "PrimeFaces") {
    throw new Error(`Expected title to be "PrimeFaces" but was "${title}"`);
  }
  await this.browser.close();
});
