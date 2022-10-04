import { describe, it, expect, vi } from "vitest"
import { sumRanges } from "../src/sum_ranges"

describe("Control sumRanges Errors", () => {

    it("Values must be an array of numbers", () => {
        expect(() => sumRanges(1,[[1,2,3]])).toThrow()
    })

    it("Values must have 5 elements minimum", () => {
        expect(() => sumRanges([1],[[1,2,3]])).toThrow()
    })

    it("Ranges must be a Matrix", () => {
        expect(() => sumRanges([12,3,4,5,6],[2])).toThrow()
    })
    
    it("All ranges in the Matrix must be numbers", () => {
        expect(() => sumRanges([12,2,3,4,5],[["hahaha"]])).toThrow()
    })

    it("All ranges must have 3 numbers max", () => {
        expect(() => sumRanges([12,4,5,6,7],[[1],[1]])).toThrow()
    })

})

describe("Testing sumRanges function", () => {
    
    it("The function must be return a number", () => {
        const spyFunction = vi.fn(sumRanges)
        const result = spyFunction([1,2,3,5,6], [[1,2,3]])

        expect(typeof result).toBe("number")
    })

    it("If the start position not exist not sum a number",() => {
        expect(sumRanges([1,2,3,4,5], [[8,2,3]])).toBe(0)
    })

    it("ranges(value) must change the value in values at the position by ranges(start)",() => {
        expect(sumRanges([1,2,3,4,5], [[1,1,3]])).toBe(3)
    })

    it("Sum all values in the interval of ranges", () => {
        expect(sumRanges([1, -2, 3, 4, -5, -4, 3, 2, 1 ], [[1, 3, 10]])).toBe(17)
    })

    it("Must return the max value of the sum ranges", () => {
        expect(sumRanges([1, -2, 3, 4, -5, -4, 3, 2, 1 ],  [[1, 4, 6], [2,5,4]])).toBe(8)
    })
})