import { describe, it, expect } from "vitest"
import { sum_ranges } from "../src/sum_ranges"

describe("Testing sum_ranges", () => {

    // it("ranges parameter must be a Matrix", () => {
    //     expect(() => sum_ranges([],[])).toThrow()
    // })

    it("values must be an Array of numbers", () => {
        expect(() => sum_ranges([],[[1,2,3]])).toThrow()
    })

    it("All elemenst in ranges son must be a number", () => {
        expect(() => sum_ranges([1],[["dfdsf"]])).toThrow()
    })

    it("All ranges son must have 3 values", () => {
        expect(() => sum_ranges([1],[[2]])).toThrow()
    })

    it("Range must be a Matrix", () => {
        expect(() => sum_ranges([1],[])).toThrow()
    })
})