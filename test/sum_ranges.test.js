import { describe, it, expect, vi } from "vitest"
import { sum_ranges } from "../src/sum_ranges"

describe("Testing sum_ranges Errors", () => {

    it("Values must be an array of numbers", () => {
        expect(() => sum_ranges(1,[[1,2,3]])).toThrow()
    })

    it("Ranges must be a Matrix", () => {
        expect(() => sum_ranges([12],[2])).toThrow()
    })
    
    it("All ranges in the Matrix must be numbers", () => {
        expect(() => sum_ranges([12],[["hahaha"]])).toThrow()
    })

    it("All ranges must have 3 numbers max", () => {
        expect(() => sum_ranges([12],[[1],[1]])).toThrow()
    })

})

describe("Testing sum_ranges function", () => {
    
    it("The function must be return a number", () => {
        const spyFunction = vi.fn(sum_ranges)
        const result = spyFunction([1,2,3], [[1,2,3]])

        expect(typeof result).toBe("number")
    })

    it("If the start position not exist not sum a number",() => {
        expect(sum_ranges([1,2,3], [[4,2,3]])).toBe(0)
    })

    it("ranges(value) must change the value in values at the position by ranges(start)",() => {
        expect(sum_ranges([1,2,3], [[1,1,3]])).toBe(3)
    })

    it("Sum all values in the interval of ranges", () => {
        expect(sum_ranges([1, -2, 3, 4, -5, -4, 3, 2, 1 ], [[1, 3, 10]])).toBe(17)
    })
})