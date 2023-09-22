// Write your tests here!

// Import function and assertion library

const caesar = require("../src/caesar").caesar;
const {expect} = require("chai");

// Create testing paramters

describe("caesar()", () => {
    
    it("should ignore capital letters", () => {
        const actual = caesar("Evan Goodwin", 7);
        const expected = caesar("evan goodwin", 7);
        expect(actual).to.eql(expected);
    });

    it("should maintain spaces and other nonalphabetic symbols in the message", () => {
        const actual = caesar("Zebra Magazine!", 3);
        const expected = "cheud pdjdclqh!";
        expect(actual).to.eql(expected);
    });

    it("should handle shifts that go past the end of the alphabet", () => {
        const actual = caesar("z", 3);
        const expected = "c";
        expect(actual).to.eql(expected);
    });

});