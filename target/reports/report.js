$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:DateTime.feature");
formatter.feature({
  "name": "Date and Time Tests",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Date auto adjust",
  "description": "",
  "keyword": "Scenario",
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
  "name": "I login as \"store manager\"",
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
  "name": "I \"click\" dropdown list",
  "rows": [
    {
      "cells": [
        "Activities",
        "Calendar Events"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iDropdownList(String,String,String\u003e)"
});
formatter.write("Sun Aug 25 19:29:11 EDT 2019 INFO: Activities is displayed: true");
formatter.embedding("image/png", "embedded2.png");
formatter.write("Sun Aug 25 19:29:12 EDT 2019 INFO: Calendar Events is displayed: true");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Create Calendar event\" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.i_click_button(String)"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat MyStepdefs.i_click_button(MyStepdefs.java:132)\n\tat ✽.I click \"Create Calendar event\" button(file:DateTime.feature:10)\n",
  "status": "pending"
});
formatter.step({
  "name": "I set the start date as \"Sep 25, 2019\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.i_set_the_start_date_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I validate the end date is \"Sep 25, 2019\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.i_validate_the_end_date_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I set the start date as \"today\u0027s date\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.i_set_the_start_date_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I validate the end date is \"today\u0027s date\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.i_validate_the_end_date_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});