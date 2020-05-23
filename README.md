# node-budget-tracker
![dependencies status](https://img.shields.io/david/maxlemieux/node-budget-tracker?style=for-the-badge)
![code size](https://img.shields.io/github/languages/code-size/maxlemieux/node-budget-tracker?style=for-the-badge)

## Table of Contents
* [About](#about)
* [Installation](#installation)
* [Usage](#usage)
* [Demo](#demo)
* [Technologies](#technologies)

## About
School project: Budget tracker with offline functionality, built in Node.js/Express.js/MongoDB

## Installation

### Get the app:

Clone the repo:

`git clone https://github.com/maxlemieux/node-budget-tracker.git`

Install the dependencies. You will also need MongoDB.

`cd node-budget-tracker`

`npm i`

## Usage

Start the server:

`npm start`

Load the app at [http://localhost:3000](http://localhost:3000).

Create a transaction of type 'add' or 'subtract'.

The app should still work when offline, thanks to the service worker storing entries temporarily in IndexedDB.

When the app comes back online, data is synchronized to the backend database (MongoDB).

## Demo
A demo of the app can be found here:

[https://node-budget-tracker.herokuapp.com/](https://node-budget-tracker.herokuapp.com/)

## Technologies
* Node.js
* Express.js
* MongoDB
* Heroku + mLab
* IndexedDB + Service Worker Enabled