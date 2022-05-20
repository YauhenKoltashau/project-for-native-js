export const sum = (a: number, b: number) => {
    return a + b
}

export const multi = (a: number, b: number) => {
    return a * b
}

export const splittingWords = (sentense: string) => {
    const words = sentense.toLowerCase().split(" ")
    return words.filter(w => w!== "" && w!=="-")
        .map(w => w.replace("!",""))
}
