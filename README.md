[![Build Status](https://travis-ci.org/cjuszczak/explorphotos.svg?branch=master)](https://travis-ci.org/cjuszczak/explorphotos) [![Coverage Status](https://coveralls.io/repos/github/cjuszczak/explorphotos/badge.svg?branch=master)](https://coveralls.io/github/cjuszczak/explorphotos?branch=master) 

#Explor.photos

Explor.photos is my personal playground of sorts for playing with various new JavaScript frameworks to build my own personal photo gallery. This is a work in progress and generally only updated time permitting. Currently the back-end work is in progress and the front-end work will start once a sufficient amount of the back-end is available for use. This project also features a basic testing suite.

### Prerequisites

* [Node.js](https://nodejs.org)
* [npm](https://www.npmjs.org)
* [MongoDB](https://mongodb.com)

## Install NPM Packages

To begin you'll need to install the npm packages that are found in the `packages.json` file:

```bash
npm install
```

## Running Tests

This repo includes some basic testing that don't really meet the definition of true unit tests but allow you to test the API calls and show their appropriate responses. To run the tests and generate a coverage report:

```bash
npm test
```

## Running the server

```bash
node app.js
```

## Deployment

To deploy this to a live system you will need Node and MongoDB.

## Note about Gulp

Gulp is listed as a dev dependency but is not yet fully configured.

## Author

* **Charlie Juszczak** - [cjuszczak](https://github.com/cjuszczak)

### License

This project is licensed under the MIT License.

