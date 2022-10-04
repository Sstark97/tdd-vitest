import { describe, it, expect, vi } from "vitest"
import { reverse_string, paintFrame } from "../../src/daw/reverse_string"

describe("Testing reverse_string", () => {

    it("A parameter of reverse_string throw an error if the parameter doesn was an String", () => {
        expect(() => reverse_string(23)).toThrow()
    })

    it("reverse string must return another String", () => {
        const spyFunction = vi.fn(reverse_string)
        const result = spyFunction("")

        expect(result).toBe("")
        expect(spyFunction).toHaveReturned()
    })

    it("Must return the same string if the chain have one letter", () => {
        expect(reverse_string("a")).toBe("a")
    })

    it("Must return the reverse of the string if the chain have many letters", () => {
        expect(reverse_string("ho")).toBe("oh")
    })
})

describe("Return reverse string with a frame", () => {
    const spyFunction = vi.fn(paintFrame)

    it("A parameter of reverse_string throw an error if the parameter doesn was an String", () => {
        expect(() => paintFrame(23)).toThrow()
    })

    it("The frame must be an String", () => {
        const frame = spyFunction("a")

        expect(typeof frame).toBe("string")
    })

    it("The frame parameter not be an empty string", () => {
        expect(() => paintFrame("")).toThrow()
    })

    it("The frame not be empty", () => {
        expect(paintFrame("o")).not.toBe("")
    })

    it("The frame must include '*' and ' ' ", () => {
        const frame = spyFunction("e")

        expect(frame.includes("*")).toBe(true)
        expect(frame.includes(" ")).toBe(true)
    })

    it("Thefunction return the paremeter with a frame", () => {
        const string = "aloh"
        const row = "*".repeat(string.length + 8)
        const whiteSpaces = " ".repeat(string.length + 8  - 2)
        const spaces = " ".repeat(3)

        expect(paintFrame(string)).toBe(`${row}\n*${whiteSpaces}*\n*${spaces}${string}${spaces}*\n*${whiteSpaces}*\n${row}`)
    })

})