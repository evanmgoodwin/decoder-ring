// Write your tests here!

// Import function and assertion library

const polybius = require("../src/polybius").polybius;
const {expect} = require("chai");

// Create testing parameters

describe("polybius()", () => {

        it("should ouput a string WHEN ENCODING", () => {
            expect(polybius("evan")).to.equal("51151133");
        });

        it("should return false WHEN DECODING if string length is odd", () => {
            const actual = polybius("777", false);
            expect(actual).to.be.false;
        });

        it("should maintain spaces throughout", () => {
            const actual = polybius("t e s t i n g");
            const expected = "44 51 34 44 42 33 22";
            expect(actual).to.eql(expected);
        });

        it("should ignore capital letters", () => {
            const actual = polybius("TEST");
            const expected = "44513444";
            expect(actual).to.eql(expected);
        });

        it("should convert i to 42 WHEN ENCODING", () => {
            const actual = polybius("i");
            const expected = "42";
            expect(actual).to.eql(expected);
        });

        it("should convert j to 42 WHEN ENCODING", () => {
            const actual = polybius("j");
            const expected = "42";
            expect(actual).to.eql(expected);
        });
        
        it("should convert 42 to i/j WHEN DECODING", () => {
            const actual = polybius("42", false);
            const expected = "i/j";
            expect(actual).to.eql(expected);
        });
    });


