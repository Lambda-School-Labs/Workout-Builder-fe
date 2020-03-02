<!-- 🚫 Note: All lines that start with 🚫 are instructions and should be deleted before this is posted to your portfolio. This is intended to be a guideline, feel free to add your own flare to it.

🚫 The numbers 1️⃣ through 5️⃣ next to each item represent the week that part of the docs needs to be comepleted by.  Make sure to delete the numbers by the end of Labs.

🚫 Each student has a required minimum number of meaningful PRs each week per the rubric. Contributing to docs does NOT count as a PR to meet your weekly requirements. -->



# Workout Builder

[![Maintainability](https://api.codeclimate.com/v1/badges/ec547d1af13580d3e0b5/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/Workout-Builder-fe/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/ec547d1af13580d3e0b5/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/Workout-Builder-fe/test_coverage)

#### Front end deployed to AWS

You can find the deployed project at [www.strongerfaster.fit](https://www.strongerfaster.fit/)

##  Contributors

[Jonathan Picazo](https://github.com/macjabeth)

[David Delfaus](https://github.com/ddelfaus)

[Nadeem Anvaritafti](https://github.com/NadeemAnvaritafti)

[Burl Fernandes](https://github.com/burlferns)

[Nikolai Gaivoronski](https://github.com/ngaivoronski)

## Project Overview

#### [Trello Board](https://trello.com/b/DiOkveab/workout-builder)

#### [Product Canvas](https://www.notion.so/Workout-Builder-StrongerFaster-fit-cdd36e897fc14df9a58c723fab7c2e6e)

#### [UX Design files](https://www.figma.com/file/iyvWwtRJ8gvXJSSF0SID8I/Workout-Builder%2C-Lisa-Arcangel%2C-Justine-Gennaro?node-id=1201%3A634)


This is a workout builder for the professional trainer or highly trained individual that likes to build complex programming of sets, tempos, super sets, failure sets, and all sorts of variations. 
This products UX should outshine other existing products' interactions and interface. 

###  Key Features

-    Build a library of exericses. 
-    Build a library of programs. A program is a collection of workouts.
-    Build workouts. A workout is a collection of exercises to be done on a particular day.
-    Assign a program to a client.
-    Simple and intuitive UI to create exercises/programs/workouts

## Tech Stack

### Front end built using:


<!-- 🚫 more info on using badges [here](https://github.com/badges/shields) -->

![React](https://img.shields.io/badge/react-v16.12.0-blue)
![Redux](https://img.shields.io/badge/react--redux-v7.1.3-purple)
![Reach Router](https://img.shields.io/badge/%40reach%2Frouter-v1.3.1-blue)
![Tailwind](https://img.shields.io/badge/tailwindcss-v1.2-green)

#### Why we chose these frameworks?

-    Popularity
-    Familiarity
-    State management is built for large applications
-    Tailwind has easy to follow documentation and can be implemented alongside native CSS; makes it easier to add styling within the JSX; less of a learning curve

<!-- 🚫List the rest of the front end features and libraries in the same format as the framework above. -->

<!-- #### [Back end](https://github.com/Lambda-School-Labs/Workout-Builder-be) built using: -->

<!-- #### 🚫 back end framework goes here -->

<!-- ![Express](https://img.shields.io/badge/Express-v4.17.1-blue)
![Knex](https://img.shields.io/badge/Knex-v0.20.10-purple)
![Passport](https://img.shields.io/badge/Passport.js-v0.4.1-green) -->


# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

* REACT_APP_BACKEND_URL - this is the base URL for the backend. It can be set to localhost if running the backend for testing & debugging
* REACT_APP_SENTRY_DSN - this sets the location to report any errors that occur in the code while the React app is running

<!-- 🚫These are just examples, replace them with the specifics for your app

    *  REACT_APP_apiKey - this is your Google API key, which can be generated in the Google Cloud Console
    *  REACT_APP_authDomain - when you set up your Firebase project, this information will be in the dashboard
    *  REACT_APP_databaseURL - in the Firebase dashboard
    *  REACT_APP_projectID - in the Firebase dashboard
    *  REACT_APP_storageBucket - in the Firebase dashboard
    *  REACT_APP_messagingSenderId - in the Firebase dashboard
    *  REACT_APP_stripe_API - this is your public Stripe API key, generated in the Stripe dashboard
    *  REACT_APP_backendURL - optional for your local development server
    *  REACT_APP_clientid - this is the Stripe_connect clientID, generated in Stripe_connect settings
    *  REACT_APP_stripe_plan - this is the ID for a second Stripe subscription plan, generated under Stripe products -->


<!-- # Content Licenses -->

<!-- 🚫For all content - images, icons, etc, use this table to document permission of use. Remove the two placeholders and add you content to this table -->


<!-- | Image Filename | Source / Creator | License |
| -------------- | ---------------- | ------- |
| doodles.png    | Nicole Bennett   | Creative Commons](https://www.toptal.com/designers/subtlepatterns/doodles/) |
| rings.svg      | Sam Herbert      | [MIT](https://github.com/SamHerbert/SVG-Loaders)                             | -->

#  Testing

<!-- 🚫Document what you used for testing and why -->

Used Jest & Testing-Library for testing the frontend code.


# Installation Instructions

<!-- 🚫explain how to install the required dependencies to get this project up and running with yarn and NPM -->

Download or clone the repository on your computer and then run "yarn install" in the terminal window. To start the React App type in "yarn start" & ENTER in the terminal window.


<!-- ## Other Scripts

🚫replace these examples with your own

    * typecheck - runs the TypeScript compiler
    * build - creates a build of the application
    * start - starts the production server after a build is created
    * test - runs tests in **tests** directory \* eject - copy the configuration files and dependencies into the project so you have full control over them -->

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request
   
 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/Lambda-School-Labs/workout-builder-be) for details on the backend of our project.
