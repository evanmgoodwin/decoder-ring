// Write your tests here!

// Import function and assertion library

const substitution = require("../src/substitution").substitution;
const {expect} = require("chai");

// Create testing parameters

describe("substitution()", () => {

    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    it("should ignore capital letters", () => {
        const actual = substitution("EVAN", alphabet);
        const expected = "evan";
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces throughout", () => {
        const actual = substitution("ev an", alphabet);
        const expected = "ev an";
        expect(actual).to.equal(expected);
    });

    it("should return false if duplicate characters are present", () => {
        const actual = substitution("evan", "osfdfsdf");
        const expected = false;
        expect(actual).to.eql(expected);
    });

    it("should return false if alphabet is not 26 characters long", () => {
        const actual = substitution("evan", "qwertyuiopasdfghjklzxcvbn");
        expect(actual).to.be.false;
    });

});