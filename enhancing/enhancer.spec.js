const enhancer = require('./enhancer.js');
// test away!

describe("enhancer.js", () => {

    // Testing succeed() functions
    describe("succeed()", () => {
        it("returns a new item with enhancement +1", () => {
            expect(enhancer
                .succeed({ enhancement: 10, durability: 100 }))
                .toEqual({ enhancement: 11, durability: 100 })
        })

        it("returns a new item with the same enhancement", () => {
            expect(enhancer
                .succeed({ enhancement: 20, durability: 100 }))
                .toEqual({ enhancement: 20, durability: 100 })
        })
    })

    // Testing fail() function
    describe("fail()", () => {
        it("returns a new item with durability -5", () => {
            expect(enhancer
                .fail({ enhancement: 10, durability: 100 }))
                .toEqual({ enhancement: 10, durability: 95 })
        })

        it("returns a new item with durability -10", () => {
            expect(enhancer
                .fail({ enhancement: 15, durability: 100 }))
                .toEqual({ enhancement: 15, durability: 90 })
        })

        it("return a nex item with enhancement -1", () => {
            expect(enhancer
                .fail({ enhancement: 20, durability: 100 }))
                .toEqual({ enhancement: 19, durability: 100 })
        })
    })

    // Testing repair() function
    describe("repair()", () => {
        it("returns a new item with durability restored to 100", () => {
            expect(enhancer
                .repair({ enhancement: 20, durability: 95 }))
                .toEqual({ enhancement: 20, durability: 100 })
        })
    })

    // Testing get() function
    describe("get()", () => {
        it("returns a new item with no modification if enhancement is 0", () => {
            expect(enhancer
                .get({ name: "testName", enhancement: 0, durability: 100 }))
                .toEqual({ name: "testName", enhancement: 0, durability: 100 })
        })
    })
})