import { describe, it, expect } from "vitest"
import { sum_ranges } from "../src/sum_ranges"

describe("Testing sum_ranges", () => {

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