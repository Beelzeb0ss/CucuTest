$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bookTrainerSession.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Book trainer session feature",
  "description": "",
  "id": "book-trainer-session-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 22,
  "name": "User registration",
  "description": "",
  "id": "book-trainer-session-feature;user-registration",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "The user opens the book trainer session screen",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Is authenticated \"\u003cemail\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Selects Trainer \"\u003ctrainer\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Selects Time \"\u003ctime\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Selects Date \"\u003cdate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks book button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Sees booking message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "book-trainer-session-feature;user-registration;",
  "rows": [
    {
      "cells": [
        "email",
        "trainer",
        "time",
        "date",
        "message"
      ],
      "line": 32,
      "id": "book-trainer-session-feature;user-registration;;1"
    },
    {
      "cells": [
        "nai_zdraviq@abv.bg",
        "mitkoMitkoto@abv.bg",
        "02:24",
        "2021/01/01",
        "OK"
      ],
      "line": 33,
      "id": "book-trainer-session-feature;user-registration;;2"
    },
    {
      "cells": [
        "nai_zdraviq@abv.bg",
        "asdasdo@abv.bg",
        "02:24",
        "2021/01/01",
        "Invalid trainer"
      ],
      "line": 34,
      "id": "book-trainer-session-feature;user-registration;;3"
    },
    {
      "cells": [
        "",
        "mitkoMitkoto@abv.bg",
        "02:24",
        "2021/01/01",
        "Invalid user"
      ],
      "line": 35,
      "id": "book-trainer-session-feature;user-registration;;4"
    },
    {
      "cells": [
        "nai_zdraviq@abv.bg",
        "mitkoMitkoto@abv.bg",
        "00:00",
        "1970/01/01",
        "Time and Date are already booked by another user"
      ],
      "line": 36,
      "id": "book-trainer-session-feature;user-registration;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 33,
  "name": "User registration",
  "description": "",
  "id": "book-trainer-session-feature;user-registration;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "The user opens the book trainer session screen",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Is authenticated \"nai_zdraviq@abv.bg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Selects Trainer \"mitkoMitkoto@abv.bg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Selects Time \"02:24\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Selects Date \"2021/01/01\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks book button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Sees booking message \"OK\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BookTrainerSessionSteps.the_user_opens_the_book_trainer_session_screen()"
});
formatter.result({
  "duration": 110365200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nai_zdraviq@abv.bg",
      "offset": 18
    }
  ],
  "location": "BookTrainerSessionSteps.is_authenticated(String)"
});
formatter.result({
  "duration": 1169500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mitkoMitkoto@abv.bg",
      "offset": 17
    }
  ],
  "location": "BookTrainerSessionSteps.selects_trainer(String)"
});
formatter.result({
  "duration": 26300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02:24",
      "offset": 14
    }
  ],
  "location": "BookTrainerSessionSteps.selects_time(String)"
});
formatter.result({
  "duration": 27100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021/01/01",
      "offset": 14
    }
  ],
  "location": "BookTrainerSessionSteps.selects_date(String)"
});
formatter.result({
  "duration": 25300,
  "status": "passed"
});
formatter.match({
  "location": "BookTrainerSessionSteps.clicks_book_button()"
});
formatter.result({
  "duration": 3857300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 22
    }
  ],
  "location": "BookTrainerSessionSteps.sees_booking_message(String)"
});
formatter.result({
  "duration": 1007500,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "User registration",
  "description": "",
  "id": "book-trainer-session-feature;user-registration;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "The user opens the book trainer session screen",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Is authenticated \"nai_zdraviq@abv.bg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Selects Trainer \"asdasdo@abv.bg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Selects Time \"02:24\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Selects Date \"2021/01/01\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks book button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Sees booking message \"Invalid trainer\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BookTrainerSessionSteps.the_user_opens_the_book_trainer_session_screen()"
});
formatter.result({
  "duration": 29100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nai_zdraviq@abv.bg",
      "offset": 18
    }
  ],
  "location": "BookTrainerSessionSteps.is_authenticated(String)"
});
formatter.result({
  "duration": 28900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdasdo@abv.bg",
      "offset": 17
    }
  ],
  "location": "BookTrainerSessionSteps.selects_trainer(String)"
});
formatter.result({
  "duration": 22700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02:24",
      "offset": 14
    }
  ],
  "location": "BookTrainerSessionSteps.selects_time(String)"
});
formatter.result({
  "duration": 22700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021/01/01",
      "offset": 14
    }
  ],
  "location": "BookTrainerSessionSteps.selects_date(String)"
});
formatter.result({
  "duration": 21300,
  "status": "passed"
});
formatter.match({
  "location": "BookTrainerSessionSteps.clicks_book_button()"
});
formatter.result({
  "duration": 35100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid trainer",
      "offset": 22
    }
  ],
  "location": "BookTrainerSessionSteps.sees_booking_message(String)"
});
formatter.result({
  "duration": 30400,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "User registration",
  "description": "",
  "id": "book-trainer-session-feature;user-registration;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "The user opens the book trainer session screen",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Is authenticated \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Selects Trainer \"mitkoMitkoto@abv.bg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Selects Time \"02:24\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Selects Date \"2021/01/01\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks book button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Sees booking message \"Invalid user\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BookTrainerSessionSteps.the_user_opens_the_book_trainer_session_screen()"
});
formatter.result({
  "duration": 30700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "BookTrainerSessionSteps.is_authenticated(String)"
});
formatter.result({
  "duration": 22800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mitkoMitkoto@abv.bg",
      "offset": 17
    }
  ],
  "location": "BookTrainerSessionSteps.selects_trainer(String)"
});
formatter.result({
  "duration": 21800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02:24",
      "offset": 14
    }
  ],
  "location": "BookTrainerSessionSteps.selects_time(String)"
});
formatter.result({
  "duration": 19600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021/01/01",
      "offset": 14
    }
  ],
  "location": "BookTrainerSessionSteps.selects_date(String)"
});
formatter.result({
  "duration": 36600,
  "status": "passed"
});
formatter.match({
  "location": "BookTrainerSessionSteps.clicks_book_button()"
});
formatter.result({
  "duration": 25500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid user",
      "offset": 22
    }
  ],
  "location": "BookTrainerSessionSteps.sees_booking_message(String)"
});
formatter.result({
  "duration": 23900,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "User registration",
  "description": "",
  "id": "book-trainer-session-feature;user-registration;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "The user opens the book trainer session screen",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Is authenticated \"nai_zdraviq@abv.bg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Selects Trainer \"mitkoMitkoto@abv.bg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Selects Time \"00:00\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Selects Date \"1970/01/01\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Clicks book button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Sees booking message \"Time and Date are already booked by another user\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BookTrainerSessionSteps.the_user_opens_the_book_trainer_session_screen()"
});
formatter.result({
  "duration": 35500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nai_zdraviq@abv.bg",
      "offset": 18
    }
  ],
  "location": "BookTrainerSessionSteps.is_authenticated(String)"
});
formatter.result({
  "duration": 30800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mitkoMitkoto@abv.bg",
      "offset": 17
    }
  ],
  "location": "BookTrainerSessionSteps.selects_trainer(String)"
});
formatter.result({
  "duration": 20700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "00:00",
      "offset": 14
    }
  ],
  "location": "BookTrainerSessionSteps.selects_time(String)"
});
formatter.result({
  "duration": 21100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1970/01/01",
      "offset": 14
    }
  ],
  "location": "BookTrainerSessionSteps.selects_date(String)"
});
formatter.result({
  "duration": 27100,
  "status": "passed"
});
formatter.match({
  "location": "BookTrainerSessionSteps.clicks_book_button()"
});
formatter.result({
  "duration": 468400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Time and Date are already booked by another user",
      "offset": 22
    }
  ],
  "location": "BookTrainerSessionSteps.sees_booking_message(String)"
});
formatter.result({
  "duration": 34400,
  "status": "passed"
});
formatter.uri("gtsSignUpFeature.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "GTS sign up feature",
  "description": "",
  "id": "gts-sign-up-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 22,
  "name": "GTS Sign Up",
  "description": "",
  "id": "gts-sign-up-feature;gts-sign-up",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "The user opens the gts sign up screen",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "The user is authenticated \"\u003cemail\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Selects Session \"\u003csession\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Clicks sign up button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Sees sign up message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "gts-sign-up-feature;gts-sign-up;",
  "rows": [
    {
      "cells": [
        "email",
        "session",
        "message"
      ],
      "line": 30,
      "id": "gts-sign-up-feature;gts-sign-up;;1"
    },
    {
      "cells": [
        "nai_zdraviq@abv.bg",
        "GT1",
        "OK"
      ],
      "line": 31,
      "id": "gts-sign-up-feature;gts-sign-up;;2"
    },
    {
      "cells": [
        "nai_zdraviq@abv.bg",
        "GT2",
        "Session is full"
      ],
      "line": 32,
      "id": "gts-sign-up-feature;gts-sign-up;;3"
    },
    {
      "cells": [
        "",
        "GT1",
        "Null user"
      ],
      "line": 33,
      "id": "gts-sign-up-feature;gts-sign-up;;4"
    },
    {
      "cells": [
        "nai_zdraviq@abv.bg",
        "GT3",
        "Invalid session"
      ],
      "line": 34,
      "id": "gts-sign-up-feature;gts-sign-up;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "GTS Sign Up",
  "description": "",
  "id": "gts-sign-up-feature;gts-sign-up;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "The user opens the gts sign up screen",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "The user is authenticated \"nai_zdraviq@abv.bg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Selects Session \"GT1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Clicks sign up button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Sees sign up message \"OK\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GroupTrainingSessionSingUpSteps.the_user_opens_the_gts_sign_up_screen()"
});
formatter.result({
  "duration": 83500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nai_zdraviq@abv.bg",
      "offset": 27
    }
  ],
  "location": "GroupTrainingSessionSingUpSteps.the_user_is_authenticated(String)"
});
formatter.result({
  "duration": 40400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GT1",
      "offset": 17
    }
  ],
  "location": "GroupTrainingSessionSingUpSteps.selects_session(String)"
});
formatter.result({
  "duration": 40300,
  "status": "passed"
});
formatter.match({
  "location": "GroupTrainingSessionSingUpSteps.clicks_sign_up_button()"
});
formatter.result({
  "duration": 1014300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 22
    }
  ],
  "location": "GroupTrainingSessionSingUpSteps.sees_sign_up_message(String)"
});
formatter.result({
  "duration": 48800,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "GTS Sign Up",
  "description": "",
  "id": "gts-sign-up-feature;gts-sign-up;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "The user opens the gts sign up screen",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "The user is authenticated \"nai_zdraviq@abv.bg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Selects Session \"GT2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Clicks sign up button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Sees sign up message \"Session is full\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GroupTrainingSessionSingUpSteps.the_user_opens_the_gts_sign_up_screen()"
});
formatter.result({
  "duration": 31800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nai_zdraviq@abv.bg",
      "offset": 27
    }
  ],
  "location": "GroupTrainingSessionSingUpSteps.the_user_is_authenticated(String)"
});
formatter.result({
  "duration": 24100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GT2",
      "offset": 17
    }
  ],
  "location": "GroupTrainingSessionSingUpSteps.selects_session(String)"
});
formatter.result({
  "duration": 24100,
  "status": "passed"
});
formatter.match({
  "location": "GroupTrainingSessionSingUpSteps.clicks_sign_up_button()"
});
formatter.result({
  "duration": 27400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Session is full",
      "offset": 22
    }
  ],
  "location": "GroupTrainingSessionSingUpSteps.sees_sign_up_message(String)"
});
formatter.result({
  "duration": 22300,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "GTS Sign Up",
  "description": "",
  "id": "gts-sign-up-feature;gts-sign-up;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "The user opens the gts sign up screen",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "The user is authenticated \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Selects Session \"GT1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Clicks sign up button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Sees sign up message \"Null user\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GroupTrainingSessionSingUpSteps.the_user_opens_the_gts_sign_up_screen()"
});
formatter.result({
  "duration": 28900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 27
    }
  ],
  "location": "GroupTrainingSessionSingUpSteps.the_user_is_authenticated(String)"
});
formatter.result({
  "duration": 23200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GT1",
      "offset": 17
    }
  ],
  "location": "GroupTrainingSessionSingUpSteps.selects_session(String)"
});
formatter.result({
  "duration": 19400,
  "status": "passed"
});
formatter.match({
  "location": "GroupTrainingSessionSingUpSteps.clicks_sign_up_button()"
});
formatter.result({
  "duration": 10900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Null user",
      "offset": 22
    }
  ],
  "location": "GroupTrainingSessionSingUpSteps.sees_sign_up_message(String)"
});
formatter.result({
  "duration": 20500,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "GTS Sign Up",
  "description": "",
  "id": "gts-sign-up-feature;gts-sign-up;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "The user opens the gts sign up screen",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "The user is authenticated \"nai_zdraviq@abv.bg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Selects Session \"GT3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Clicks sign up button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Sees sign up message \"Invalid session\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GroupTrainingSessionSingUpSteps.the_user_opens_the_gts_sign_up_screen()"
});
formatter.result({
  "duration": 27800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nai_zdraviq@abv.bg",
      "offset": 27
    }
  ],
  "location": "GroupTrainingSessionSingUpSteps.the_user_is_authenticated(String)"
});
formatter.result({
  "duration": 24700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GT3",
      "offset": 17
    }
  ],
  "location": "GroupTrainingSessionSingUpSteps.selects_session(String)"
});
formatter.result({
  "duration": 51500,
  "status": "passed"
});
formatter.match({
  "location": "GroupTrainingSessionSingUpSteps.clicks_sign_up_button()"
});
formatter.result({
  "duration": 32500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid session",
      "offset": 22
    }
  ],
  "location": "GroupTrainingSessionSingUpSteps.sees_sign_up_message(String)"
});
formatter.result({
  "duration": 22300,
  "status": "passed"
});
formatter.uri("loginFeature.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 22,
  "name": "Login with valid data",
  "description": "",
  "id": "login-feature;login-with-valid-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "The user opens the login screen",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Enters email \"nai_zdraviq@abv.bg\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Enters password \"pass123\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Sees login message \"OK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.the_user_opens_the_login_screen()"
});
formatter.result({
  "duration": 95800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nai_zdraviq@abv.bg",
      "offset": 14
    }
  ],
  "location": "LoginSteps.enters_email(String)"
});
formatter.result({
  "duration": 54300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass123",
      "offset": 17
    }
  ],
  "location": "LoginSteps.enters_password(String)"
});
formatter.result({
  "duration": 33800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicks_the_login_button()"
});
formatter.result({
  "duration": 854600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 20
    }
  ],
  "location": "LoginSteps.sees_login_message(String)"
});
formatter.result({
  "duration": 36700,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Login with wrong email",
  "description": "",
  "id": "login-feature;login-with-wrong-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "The user opens the login screen",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "Enters email \"stoqn@abv.bg\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Enters password \"pass123\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Sees login message \"Wrong email or password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.the_user_opens_the_login_screen()"
});
formatter.result({
  "duration": 33100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "stoqn@abv.bg",
      "offset": 14
    }
  ],
  "location": "LoginSteps.enters_email(String)"
});
formatter.result({
  "duration": 23800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass123",
      "offset": 17
    }
  ],
  "location": "LoginSteps.enters_password(String)"
});
formatter.result({
  "duration": 18500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicks_the_login_button()"
});
formatter.result({
  "duration": 20400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wrong email or password",
      "offset": 20
    }
  ],
  "location": "LoginSteps.sees_login_message(String)"
});
formatter.result({
  "duration": 25300,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Login with null email",
  "description": "",
  "id": "login-feature;login-with-null-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "The user opens the login screen",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "Enters email \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Enters password \"pass123\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Sees login message \"Enter email\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.the_user_opens_the_login_screen()"
});
formatter.result({
  "duration": 29000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 14
    }
  ],
  "location": "LoginSteps.enters_email(String)"
});
formatter.result({
  "duration": 21300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass123",
      "offset": 17
    }
  ],
  "location": "LoginSteps.enters_password(String)"
});
formatter.result({
  "duration": 19000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicks_the_login_button()"
});
formatter.result({
  "duration": 11200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter email",
      "offset": 20
    }
  ],
  "location": "LoginSteps.sees_login_message(String)"
});
formatter.result({
  "duration": 31100,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Login with null password",
  "description": "",
  "id": "login-feature;login-with-null-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "The user opens the login screen",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "Enters email \"nai_zdraviq@abv.bg\"",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "Enters password \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Sees login message \"Enter pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.the_user_opens_the_login_screen()"
});
formatter.result({
  "duration": 26900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nai_zdraviq@abv.bg",
      "offset": 14
    }
  ],
  "location": "LoginSteps.enters_email(String)"
});
formatter.result({
  "duration": 20500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "LoginSteps.enters_password(String)"
});
formatter.result({
  "duration": 27400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicks_the_login_button()"
});
formatter.result({
  "duration": 11000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter pass",
      "offset": 20
    }
  ],
  "location": "LoginSteps.sees_login_message(String)"
});
formatter.result({
  "duration": 20500,
  "status": "passed"
});
formatter.uri("registerFeature.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Register feature",
  "description": "",
  "id": "register-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 22,
  "name": "User registration",
  "description": "",
  "id": "register-feature;user-registration",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "The user opens the registration screen",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Enters first name \"\u003cfirstName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Enters last name \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enters desired password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Confirms password \"\u003cpassword2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enters desired email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Enters phone \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Clicks register button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Sees registration message\"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "register-feature;user-registration;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "password",
        "password2",
        "email",
        "phone",
        "message"
      ],
      "line": 34,
      "id": "register-feature;user-registration;;1"
    },
    {
      "cells": [
        "",
        "lastName",
        "password",
        "password",
        "email",
        "phone",
        "Enter first name"
      ],
      "line": 35,
      "id": "register-feature;user-registration;;2"
    },
    {
      "cells": [
        "firstName",
        "",
        "password",
        "password",
        "email",
        "phone",
        "Enter last name"
      ],
      "line": 36,
      "id": "register-feature;user-registration;;3"
    },
    {
      "cells": [
        "firstName",
        "lastName",
        "password",
        "password2",
        "email",
        "phone",
        "Password does not match"
      ],
      "line": 37,
      "id": "register-feature;user-registration;;4"
    },
    {
      "cells": [
        "stoqn",
        "stoqnov",
        "password",
        "password",
        "email",
        "phone",
        "OK"
      ],
      "line": 38,
      "id": "register-feature;user-registration;;5"
    },
    {
      "cells": [
        "stoqn",
        "stoqnov",
        "password",
        "password",
        "nai_zdraviq@abv.bg",
        "phone",
        "A user with the same email exists"
      ],
      "line": 39,
      "id": "register-feature;user-registration;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 35,
  "name": "User registration",
  "description": "",
  "id": "register-feature;user-registration;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "The user opens the registration screen",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Enters first name \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Enters last name \"lastName\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enters desired password \"password\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Confirms password \"password\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enters desired email \"email\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Enters phone \"phone\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Clicks register button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Sees registration message\"Enter first name\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.the_user_opens_the_registration_screen()"
});
formatter.result({
  "duration": 96700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.enters_first_name(String)"
});
formatter.result({
  "duration": 37800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lastName",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.enters_last_name(String)"
});
formatter.result({
  "duration": 26800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 25
    }
  ],
  "location": "RegisterSteps.enters_desired_password(String)"
});
formatter.result({
  "duration": 34300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.confirms_password(String)"
});
formatter.result({
  "duration": 23900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.enters_desired_email(String)"
});
formatter.result({
  "duration": 28900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "phone",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.enters_phone(String)"
});
formatter.result({
  "duration": 25800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.clicks_register_button()"
});
formatter.result({
  "duration": 356300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter first name",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.sees_registration_message(String)"
});
formatter.result({
  "duration": 32200,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "User registration",
  "description": "",
  "id": "register-feature;user-registration;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "The user opens the registration screen",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Enters first name \"firstName\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Enters last name \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enters desired password \"password\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Confirms password \"password\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enters desired email \"email\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Enters phone \"phone\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Clicks register button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Sees registration message\"Enter last name\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.the_user_opens_the_registration_screen()"
});
formatter.result({
  "duration": 48400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstName",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.enters_first_name(String)"
});
formatter.result({
  "duration": 36800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.enters_last_name(String)"
});
formatter.result({
  "duration": 25900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 25
    }
  ],
  "location": "RegisterSteps.enters_desired_password(String)"
});
formatter.result({
  "duration": 26300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.confirms_password(String)"
});
formatter.result({
  "duration": 23500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.enters_desired_email(String)"
});
formatter.result({
  "duration": 20500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "phone",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.enters_phone(String)"
});
formatter.result({
  "duration": 18600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.clicks_register_button()"
});
formatter.result({
  "duration": 13100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter last name",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.sees_registration_message(String)"
});
formatter.result({
  "duration": 20700,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "User registration",
  "description": "",
  "id": "register-feature;user-registration;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "The user opens the registration screen",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Enters first name \"firstName\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Enters last name \"lastName\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enters desired password \"password\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Confirms password \"password2\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enters desired email \"email\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Enters phone \"phone\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Clicks register button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Sees registration message\"Password does not match\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.the_user_opens_the_registration_screen()"
});
formatter.result({
  "duration": 29500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstName",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.enters_first_name(String)"
});
formatter.result({
  "duration": 20300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lastName",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.enters_last_name(String)"
});
formatter.result({
  "duration": 18800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 25
    }
  ],
  "location": "RegisterSteps.enters_desired_password(String)"
});
formatter.result({
  "duration": 17700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password2",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.confirms_password(String)"
});
formatter.result({
  "duration": 21300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.enters_desired_email(String)"
});
formatter.result({
  "duration": 18700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "phone",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.enters_phone(String)"
});
formatter.result({
  "duration": 34900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.clicks_register_button()"
});
formatter.result({
  "duration": 45000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password does not match",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.sees_registration_message(String)"
});
formatter.result({
  "duration": 18900,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "User registration",
  "description": "",
  "id": "register-feature;user-registration;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "The user opens the registration screen",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Enters first name \"stoqn\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Enters last name \"stoqnov\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enters desired password \"password\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Confirms password \"password\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enters desired email \"email\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Enters phone \"phone\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Clicks register button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Sees registration message\"OK\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.the_user_opens_the_registration_screen()"
});
formatter.result({
  "duration": 43800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "stoqn",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.enters_first_name(String)"
});
formatter.result({
  "duration": 19800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "stoqnov",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.enters_last_name(String)"
});
formatter.result({
  "duration": 17500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 25
    }
  ],
  "location": "RegisterSteps.enters_desired_password(String)"
});
formatter.result({
  "duration": 16500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.confirms_password(String)"
});
formatter.result({
  "duration": 25300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.enters_desired_email(String)"
});
formatter.result({
  "duration": 17700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "phone",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.enters_phone(String)"
});
formatter.result({
  "duration": 16700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.clicks_register_button()"
});
formatter.result({
  "duration": 359100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.sees_registration_message(String)"
});
formatter.result({
  "duration": 18800,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "User registration",
  "description": "",
  "id": "register-feature;user-registration;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "The user opens the registration screen",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Enters first name \"stoqn\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Enters last name \"stoqnov\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enters desired password \"password\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Confirms password \"password\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enters desired email \"nai_zdraviq@abv.bg\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Enters phone \"phone\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Clicks register button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Sees registration message\"A user with the same email exists\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.the_user_opens_the_registration_screen()"
});
formatter.result({
  "duration": 25000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "stoqn",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.enters_first_name(String)"
});
formatter.result({
  "duration": 17900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "stoqnov",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.enters_last_name(String)"
});
formatter.result({
  "duration": 17400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 25
    }
  ],
  "location": "RegisterSteps.enters_desired_password(String)"
});
formatter.result({
  "duration": 16900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.confirms_password(String)"
});
formatter.result({
  "duration": 17200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nai_zdraviq@abv.bg",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.enters_desired_email(String)"
});
formatter.result({
  "duration": 22000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "phone",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.enters_phone(String)"
});
formatter.result({
  "duration": 17200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.clicks_register_button()"
});
formatter.result({
  "duration": 28200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A user with the same email exists",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.sees_registration_message(String)"
});
formatter.result({
  "duration": 19800,
  "status": "passed"
});
});