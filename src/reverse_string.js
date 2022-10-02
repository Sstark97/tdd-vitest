/*
    Somos unos frikis, y nos gusta leer las frases al revés, como las veríamos en un
    espejo. En este caso, dada una frase, se pide escribirla como se vería reflejada
    en un espejo.

    Nota: no te olvides de dibujar un pequeño marco representando el mismo…
    Ej: 
    **********
    *        *
    *  aloH  *
    *        *
    **********
*/

const comprobeStringParameter = parameter => {
    if(typeof parameter !== "string") throw new Error("The parameter must to be an String")
}

export const reverse_string = parameter => {
    comprobeStringParameter(parameter)

    return parameter.split("").reverse().join("")
}

export const paintFrame = reverse => {
    comprobeStringParameter(reverse)
    if (reverse === "") throw new Error("The parameter not to be Empty")

    const frameSize = reverse.length + 8
    const row = "*".repeat(frameSize)
    const spaces = " ".repeat(3)
    const whiteSpaces = " ".repeat(frameSize - 2)
    let frame = `${row}\n`


    for(let i = 0; i <= 2; i++) {
        if(i === 1) {
            frame += `*${spaces}${reverse}${spaces}*\n`
        } else {
            frame += `*${whiteSpaces}*\n`
        }
    }


    return frame += row
}
