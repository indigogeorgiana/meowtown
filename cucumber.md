## Cucumber tests

This branch implements cucumber tests

## Introduction

In the meowtown root directory run `npm install`. This will install the test helper tool [chimp](https://chimp.readme.io/)

Take a look in the `/features` folder. You'll see two `.feature` files, a `step_definitions` folder with a `steps.js` file, and a `support folder with a `hooks.js` file.

This collection of code drives our integration tests. `.features` are the human-readable files the specify. `step_definitions/steps.js` are translate the gherkin specs into browser actions. `support/hooks.js` contains the code for starting and stopping the server  

run `npm run test:watch`. The first time this is run it will trigger chimp to download and install the selenium browser driver. You should also see the following:

![list cats feature test](/images/list-cats-run.png)

`chimp` starts our meowtown server, finds the features tagged with `@dev` `@watch`, matches the gherkin steps with browser driver steps in `step_definitions/steps.js`, opens a browser and executes the active feature scenarios. If a particular step passes it colors the step description green in the terminal.
  
Now open the `features/new-cat.feature` file and add `@watch` on line 2 above `Scenario: Add a new cat`. Save the file and chimp will rerun the watched integration tests including your the `new-cat.feature`.
  

## Release 1

1. Examine the code in `/features/support/hooks.js` and `config.js`



