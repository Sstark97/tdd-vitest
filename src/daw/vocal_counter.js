/*
    Dada una cadena de entrada, hay que devolver el recuento de las vocales que
    hay en la misma. 
*/

const vocal_counter = chain => {
    if(typeof chain !== "string") throw new Error("Parameter only was to be an string")

    const vowels = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    } 

    chain.split("").forEach(letter => vowels[letter.toLowerCase()] !== undefined && vowels[letter.toLowerCase()] ++)
    
    return vowels
}

export default vocal_counter