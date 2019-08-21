$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:FirstFeature.feature");
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
formatter.step({
  "name": "I navigate to url \"http://qa3.vytrack.com/user/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.iNavigateToUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "login as sales manager",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Moogii"
    }
  ]
});
formatter.step({
  "name": "I login as \"sales manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.iLoginAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I do something",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});