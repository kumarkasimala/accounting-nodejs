# Simple Node with Express + MongoDB Server

An easy way to get started with a Express server with MongoDB with Node.js.

## Features

- Express
- REST API
- MongoDB

## Softwares to Install

- [node & npm](https://nodejs.org/en/)
- [Windows][MongoDB](https://www.mongodb.com/try/download/community)
- [Mac MongoDB] (https://zellwk.com/blog/install-mongodb/) (/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)")

- [git](https://git-scm.com/download/)
- [Github Desktop](https://desktop.github.com/)

## Installation

- Clone Repository using Git
- `git clone git@github.com:kkasimala/accounting-nodejs.git`
- `cd accounting-nodejs`

- Or 
- Download Zip file (https://github.com/kumarkasimala/accounting-nodejs/archive/main.zip)
- Extract the zip into another fold.
- Open VS Code
- Add that folder Folder to WorkSpace
- Open New Terminal in VS Code
- Check NPM with this command : npm -version
- Install all deps using `npm install`
- [start MongoDB]
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
