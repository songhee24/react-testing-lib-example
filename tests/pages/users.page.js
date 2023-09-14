const Page = require("./page");
const { $ } = require("@wdio/globals");
class UsersPage extends Page {
  get loadingTitle() {
    return $("#users-loading");
  }

  get usersList() {
    return $("#users-list");
  }

  get usersItems() {
    // eslint-disable-next-line no-undef
    return browser.react$$("User");
  }

  async loadData() {
    try {
      await this.open();
      await this.loadingTitle.waitForDisplayed({ timeout: 2000 });
      await this.usersList.waitForDisplayed({ timeout: 2000 });
    } catch (e) {
      throw new Error(e);
    }
  }

  open(path) {
    return super.open("/users-test");
  }
}

module.exports = new UsersPage();
