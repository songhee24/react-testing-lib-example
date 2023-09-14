const HelloPage = require("../pages/hello.page");
const { expect } = require("@wdio/globals");
describe("My Hello World application", () => {
  it("should toggle", async () => {
    await HelloPage.open();
    await HelloPage.toggleTitleWithInput("hello");
    await expect(HelloPage.helloTitle).toBeExisting();
    await HelloPage.toggleBtn.click();
    await expect(HelloPage.helloTitle).not.toBeExisting();
  });

  it("should not toggle", async () => {
    await HelloPage.open();
    await HelloPage.toggleTitleWithInput("test");
    await expect(HelloPage.helloTitle).not.toBeExisting();
  });
});
