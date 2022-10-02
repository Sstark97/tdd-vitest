import { describe, it, expect} from "vitest"
import vocal_counter from "../src/vocal_counter"

describe("Vocal Counter Testing", () => {
    /*
        Los primeros test son redundantes, por lo que podemos
        borrarlos y no pasaría nada
    */

    // it("vocal_counter should be a function", () => {
    //     expect(typeof vocal_counter).toBe("function")
    // })

    // it("Comprobe vocal_counter have a paremeter", () => {
    //     expect(() => vocal_counter()).toThrow()
    // })

    it("Comprobe that te type of parameter was an String", () => {
        expect(() => vocal_counter(23)).toThrow()
    })

    it("Must be return an Object with all vowels was 0 if the chain doesnt have any vowel", () => {
        expect(vocal_counter("cdngthr")).toStrictEqual({a: 0, e:0, i:0, o:0, u:0})
    })

    it("Must be return an Object with counts one 'a' if the chain have one 'a' letter", () => {
        expect(vocal_counter("a")).toStrictEqual({a: 1, e: 0, i: 0, o: 0, u: 0})
    })

    it("Must be return an Object with counts all vowels in a chain that include one of all vowels", () => {
        expect(vocal_counter("aeiou")).toStrictEqual({a: 1, e: 1, i: 1, o: 1, u: 1})
    })

    it("Must be count a vowel with Upper Case", () => {
        expect(vocal_counter("A")).toStrictEqual({a: 1, e: 0, i: 0, o: 0, u: 0})
    })

    it("Must be return an Object with counst all vowels in a chain that include vowels and consonants", () => {
        expect(vocal_counter("Hola mundo")).toStrictEqual({a: 1, e: 0, i: 0, o: 2, u: 1})
    })
})