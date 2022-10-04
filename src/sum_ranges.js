/*
    Máximo valor de la suma de valores de un rango 
    Casos de prueba:
        [1, -2, 3, 4, -5, -4, 3, 2, 1 ] --- [[1, 3, 10]] --- resultado: 17
        [1, -2, 3, 4, -5, -4, 3, 2, 1 ] --- [[1, 4, 6], [2,5,4]] --- resultado: 8 
*/

export const sum_ranges = (values, ranges) => {
    if(!Array.isArray(values) && values.some(value => typeof value !== "number")) throw new Error("The parameters must be an Array")

    if(!Array.isArray(ranges) ||  ranges.some(range => !Array.isArray(range))) throw new Error("The parameters must be an Array")

    if(ranges.some(range => range.some(number => typeof number !== "number"))) throw new Error("Ranges must be a Matrix of numbers")

    if(ranges.some(range => range.length !== 3)) throw new Error("Ranges must have three values")

    let result = 0

    ranges.forEach( range => {
        const [start, end, value] = range

        if (values[start] !== undefined) {
            values[start] = value
            
            if(start === end) {
                result += values[start]
            } 
        }
    })

    return result

}
