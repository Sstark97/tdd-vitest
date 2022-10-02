import { describe, it, expect} from "vitest"
import vocal_counter from "../src/vocal_counter"

describe("Vocal Counter Testing", () => {
    it("vocal_counter should be a function", () => {
        expect(typeof vocal_counter).toBe("function")
    })

    it("Comprobe vocal_counter have a paremeter", () => {
        expect(() => vocal_counter()).toThrow()
    })
})