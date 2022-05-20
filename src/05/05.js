const cars = ["Saab", "Volvo", "BMW", "VW", "Ford", "tesla", "188", "Дима", "ивыо", ""];
let newCars = [...cars].sort()
console.log(cars.sort())
console.log(newCars.sort())
console.log(cars === newCars)



//console.log(numbers.sort())

const compareFn = (a, b) => {
    if (a > b) {
        return 999
    }
    return -100

}
let numbers = [1800, 3864, 5, 171, 24]
let numbers1 = [1800, 3864, 5, 171, 24]
let numbers2 = [1800, 3864, 5, 171, 24]
const sortNumbers=[...numbers].sort(compareFn)
console.log(sortNumbers)
console.log([...numbers].sort((a,b)=> a - b))
console.log([...numbers].sort((a,b)=> a - b).reverse())
console.log([...numbers].sort((a,b)=> b - a))

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
]
console.log([...students.sort((a,b)=>a.age - b.age)])
console.log([...students.sort((a,b)=>a.name < b.name? -1: 1)])
console.log([...students.sort((a,b)=>a.name.toUpperCase() < b.name.toUpperCase()? -1: 1)])

let numbers4 = [1800, 3864, 5, 171, 24, 13, 0, 677]
for (let j=0; j< numbers4.length; j++) {
    for  (let i=0; i<numbers4.length; i++) {
        if (numbers4[i] > numbers4[i + 1]) {
            [numbers4[i],numbers4[i+1]]=[numbers4[i+1], numbers4[i]]
        }
    }
}

console.log(numbers4)



    // if (numbers1[i] > numbers1[i + 1]) {
    //     // [numbers1[i], numbers1[i + 1]] = [numbers1[i + 1], numbers1[i]]
    //     let temp = numbers1[i + 1]
    //     numbers1[i+1] = numbers1[i]
    //     numbers1[i] = temp
    //
    //
    // }

// console.log(numbers1)

for (let j = 0; j < numbers2.length - 1; j++) {

    let isSorted = true
    for (let i = 0; i < numbers2.length - 1 - j; i++) {

        if(numbers2[i] > numbers2[i + 1]){
            isSorted = false;
            [numbers2[i],  numbers2[i + 1]] = [numbers2[i + 1], numbers2[i]]
        }
    }
    if(isSorted) break
}

//console.log(numbers2)