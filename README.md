# Cucumber tests

### Tools:
 * [Cucumber JS](https://github.com/cucumber/cucumber-js)
 * [Gherkin](https://github.com/cucumber/cucumber/wiki/Gherkin)
 * [Selenium](http://www.seleniumhq.org/projects/webdriver/)
 * [Chimp](https://chimp.readme.io/)
 * [WebdriverIO](http://webdriver.io/)


## Introduction

In the meowtown-cucumber root directory run `npm install`. This will install the test helper tool [chimp](https://chimp.readme.io/)

Take a look in the `/features` folder. You'll see three `.feature` files, a `step_definitions` folder with a `steps.js` file, and a `support folder with a `hooks.js` file.

Features are the human-readable files for specifying how the app responds to user interactions. `step_definitions/steps.js` translate our feature specs into browser actions. `support/hooks.js` contains the code for starting and stopping the server before and after the tests.   


## Steps

Cucumber tests use the concept of "steps". `Given` steps put the app into a particular starting state. `When` steps simulate user interaction. `Then` steps run assertions to check if the app has responded as specified.  

For example, the `features/list-cats.feature` contains an initial `Given` step:


```yml
Given I am viewing the page at "/"
```

`step_defininitions/steps.js` contains a matching step:

```js
  this.Given('I am viewing the page at "$string"', function (pathname) {
    browser.url(`http://localhost:5050${pathname}`)
  })

```

Cucumber passes the `$string` to the step callback as the first argument, `pathname`. The callback then directs the browser to navigate to `http://localost:5050` + `/`, ie `http://localost:5050/`. If no errors crop up the n this step will pass.

The `list-cats` feature also contains two `Then` steps in the format:
```yml
Then I can see the list item "fluffy"
And I can see the list item "tick"
```

(Cucumber is smart enough to know that `And` steps that follow `Then` steps are also really `Then` steps)

and a matching Webdriver step in `features/step_definitions`:
```js  
this.Then('I can see the list item "$string"', function (text, callback) {
  var listItemExists = browser.waitForExist(`li=${text}`) // selector
  assert.equal(listItemExists, true, callback)
})
```

## Selectors

Webdriver [selectors](http://webdriver.io/guide/usage/selectors.html) allow us to select elements based on the text they contain. The `Then` step asserts that a `<li>` element  containing the cat's name exists on the page. If it does it passes and the step is colored green, if it doesn't cucumber informs that this feature is not yet complete.

Run `npm test`. The first time this runs it will trigger chimp to download and install the selenium browser driver. You should also see something like the following:

![list cats feature test](/images/list-cats-run.png)

`chimp` starts our meowtown server, finds the features tagged with `@dev` `@watch`, matches the gherkin steps with browser driver steps in `step_definitions/steps.js`, opens a browser and executes the active feature scenarios. If a particular step passes it colors the step description green in the terminal.
  
Now open the `features/view-cat-profile.feature` file and add `@watch` on line 2 above `Scenario: I want to a cat's profile`. Save the file and chimp will rerun the watched integration tests. 

The test above will fail on the two final steps. Now open the `./app.js` file add a new line somewhere in the file and save it. Chimp re-runs the watched integration tests as we work on getting the test to pass. 

Chimp is the glue between a selenium browser, [WebDriver](http://webdriver.io/) and the feature specs.  

## Release 1

Get the `features/view-cat-profile.feature` to pass. 

1. You will need to implement two steps in `features/step_definitions/steps.js` that matches the following:

```yml
When I click on the link "Fluffy"
Then I can see the image "https://s-media-cache-ak0.pinimg.com/564x/4e/76/fb/4e76fbd4ceef2a98096ba7af626c8281.jpg"
```

```js
// features/view-cat-profile.feature
this.When('I click on the link "$string"', function (linkText) {
  // implement your browser driver code here
})

// write your 'view image' browser step
```
You will need to refer to the [Chimp cheatsheet](https://chimp.readme.io/docs/cheat-sheet), [Webdriver selectors](http://webdriver.io/guide/usage/selectors.html) and [Webdriver API](http://webdriver.io/api.html)

Once 


## Release 2 

Create a new file `features/search-cat.feature`. Read through the gherkin documention [Feature Introduction](https://github.com/cucumber/cucumber/wiki/Feature-Introduction) and [Given-When-Then](https://github.com/cucumber/cucumber/wiki/Given-When-Then). 

Your goal is to write a feature that lets the user search for particular cats based on their life story description:  

In a User Story format we might capture the feature's intention as follows:

`As a user
I want to find cats whose lifestory contains a keyword I enter
So that I can find cats to adopt
`

1. Spec out the feature using Gherkin Syntax in `features/search-cat.feature`.

It may be helpful to think about:

  * the initial state of the application, what page is the user on?
  * how does the user interact with the page? (enter a search into a form?)
  * what do we expect to see if the search succeeds?
  * What do we expect if the search does not succeed?

2. Add the necessary matching addtional steps to `features/step_definitions/steps.js`. 

3. Implement your feature and get your test to pass. 

