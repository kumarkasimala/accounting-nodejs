# Simple Node with Express + MongoDB Server

An easy way to get started with a Express server with MongoDB with Node.js.

## Features

- Express
- REST API
- MongoDB

## Requirements

- [node & npm](https://nodejs.org/en/)
- [git](https://www.robinwieruch.de/git-essential-commands/)

## Installation

- `git clone git@github.com:kkasimala/accounting-nodejs.git`
- `cd accounting-nodejs`
- `npm install`
- [start MongoDB](https://www.mongodb.com/try/download/community) 
- [Tutorial](https://medium.com/@LondonAppBrewery/how-to-download-install-mongodb-on-windows-4ee4b3493514)
- `npm start`
- optional: include _.env_ in your _.gitignore_

### GET Routes

- visit http://localhost:3000
  - /messages
  - /messages/1
  - /users
  - /users/1

### Beyond GET Routes

#### Postman

- Install [Postman](https://www.getpostman.com/apps) to interact with REST API
- Create a message with:
  - URL: http://localhost:3000/messages
  - Method: POST
  - Body: raw + JSON (application/json)
  - Body Content: `{ "text": "Hi again, World" }`
- Delete a message with:
  - URL: http://localhost:3000/messages/1
  - Method: DELETE
