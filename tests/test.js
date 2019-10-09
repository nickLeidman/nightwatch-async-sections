require("../nightwatch.conf.js");

module.exports = {
	beforeEach: async browser => {
		const homePage = browser.page.homePage();
		await homePage.navigate();
		await browser.waitForElementVisible("body");
	},

	afterEach: async browser => {
		browser.end();
	},

	"Test with selector": async browser => {
		await browser.waitForElementVisible('#searchform input[name="q"]');
		await browser.setValue('#searchform input[name="q"]', "Test value");
		console.log("I will fire after everything is done");
	},

	"Test with section and element": async browser => {
		const homePage = browser.page.homePage();
		const { searchForm } = homePage.section;

		await searchForm.waitForElementVisible("@input");
		await searchForm.setValue("@input", "Test value");
		console.log(
			"I will fire before everything is done, despite being after awaits"
		);
	}
};
