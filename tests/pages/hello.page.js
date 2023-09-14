const Page = require("./page");
const { $ } = require("@wdio/globals");

class HelloPage extends Page {
  get toggleBtn() {
    return $("#toggle");
  }

  get input() {
    return $("#search");
  }

  get helloTitle() {
    return $("#hello");
  }

  async toggleTitleWithInput(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  open() {
    return super.open("hello");
  }
}

module.exports = new HelloPage();
