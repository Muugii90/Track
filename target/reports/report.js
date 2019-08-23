$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/Users/Munkhnasan/IdeaProjects/CukesVytrack/src/main/resources/Second.feature");
formatter.feature({
  "name": "verify tabs",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "login as different users",
  "description": "",
  "keyword": "Scenario Outline",
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
formatter.step({
  "name": "I login as \"\u003cuserType\u003e\"",
  "keyword": "Given "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userType"
      ]
    },
    {
      "cells": [
        "Truck driver"
      ]
    },
    {
      "cells": [
        "sales manager"
      ]
    },
    {
      "cells": [
        "store manager"
      ]
    }
  ]
});
formatter.scenario({
  "name": "login as different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@testtest"
    }
  ]
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "login as different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@testtest"
    }
  ]
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
formatter.step({
  "name": "I login as \"sales manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.iLoginAs(String)"
});
formatter.embedding("image/png", "embedded3.png");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "login as different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@testtest"
    }
  ]
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
formatter.embedding("image/png", "embedded4.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login as \"store manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.iLoginAs(String)"
});
formatter.embedding("image/png", "embedded5.png");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});