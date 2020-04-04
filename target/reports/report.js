$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:FirstFeature.feature");
formatter.feature({
  "name": "First feature file",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to url \"http://qa3.vytrack.com/user/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.iNavigateToUrl(String)"
});
formatter.embedding("image/png", "embedded0.png");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "login as truck driver",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@testtest"
    }
  ]
});
formatter.step({
  "name": "I login as \"Truck driver\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.iLoginAs(String)"
});
formatter.embedding("image/png", "embedded1.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate page title of \"Dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iValidatePageTitleOf(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I mouseover to \"Fleet\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iMouseoverToTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I choose \"Vehicles\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iChoose(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MBP-2.fios-router.home\u0027, ip: \u0027fe80:0:0:0:1cb2:75f:5419:f87c%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.3\u0027, java.version: \u002712\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/bj/f5gxcs4x7pz...}, goog:chromeOptions: {debuggerAddress: localhost:57729}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 206e1978a577b6996ab9c56b974357c8\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat MyStepdefs.iChoose(MyStepdefs.java:50)\n\tat ✽.I choose \"Vehicles\"(file:FirstFeature.feature:11)\n",
  "status": "failed"
});
formatter.step({
  "name": "I get all the values from table",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I get all the values from the \"3\" the row",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iGetAllTheValuesFromTheTheRow(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to url \"http://qa3.vytrack.com/user/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.iNavigateToUrl(String)"
});
formatter.embedding("image/png", "embedded2.png");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify login username",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@testtest"
    }
  ]
});
formatter.step({
  "name": "I navigate to url \"http://qa3.vytrack.com/user/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.iNavigateToUrl(String)"
});
formatter.embedding("image/png", "embedded3.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login as \"Truck driver\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.iLoginAs(String)"
});
formatter.embedding("image/png", "embedded4.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should verify driver \"Trudie Hansen\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iShouldVerifyDriver(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});