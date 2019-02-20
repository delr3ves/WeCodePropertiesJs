global.assert = require("assert");
global.expect = require("chai").expect;
global.jsc = require("jsverify");
global.logger = require("mocha-logger");

const mocha = require("mocha");
global.describe = mocha.describe;
global.it = mocha.it;
