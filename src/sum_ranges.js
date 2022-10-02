/*
    Máximo valor de la suma de valores de un rango 
    Casos de prueba:
        [1, -2, 3, 4, -5, -4, 3, 2, 1 ] --- [[1, 3, 10]] --- resultado: 17
        [1, -2, 3, 4, -5, -4, 3, 2, 1 ] --- [[1, 4, 6], [2,5,4]] --- resultado: 8 
*/

const sum_ranges = (values, ranges) => {
    if(!Array.isArray(values)) throw new Error("The parameters must be an Array")

    if(values.some(num => typeof num !== "number") || values.length === 0) throw new Error("Values must be an Array of numbers")

    if(!Array.isArray(ranges) && ranges.some(range => !Array.isArray(range))) throw new Error("Ranges must be a Matrix")

    if(ranges.some(range => range.some( e => typeof e !== "number"))) throw new Error("Ranges son must be numbers")

    if(ranges.some(range => range.length !== 3)) throw new Error("ranges paremeter must be a Matrix of 3 elements")


}

sum_ranges([1],[])