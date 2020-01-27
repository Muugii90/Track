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
  "status": "passed"
});
formatter.step({
  "name": "I get all the values from table",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iGetAllTheValuesFromTable()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get all the values from the \"3\" the row",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iGetAllTheValuesFromTheTheRow(String)"
});
formatter.result({
  "status": "passed"
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