"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const greet_1 = require("../src/greet");
describe("This function", function () {
    it("should do...", function () {
        assert.equal("Hello, Xola", greet_1.default("Xola"));
    });
});
