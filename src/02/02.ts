export type StreetType = {
    id: number
    title: string
}
export type AddressType = {
    number: number
    street: StreetType
}
export type HouseType = {
    buildArt: number
    repaired: boolean
    address: AddressType
}
export type cityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernType>
    citizensNumber:number
}
export type GovernType = {
    type: string
    budget: number
    stuffcount: number
    address: AddressType

}
type cityStudentType = {
    title: string
    countryTitle: string
}
type AddressStudentType = {
    streetTitle: string
    city: cityStudentType
}
export type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: AddressStudentType
    technologies: Array<technologiesType>
}
type technologiesType = {
    id: number
    title: string
}
export const student: StudentType = {
    "name": "Yauhen",
    age: 36,
    isActive: false,
    address: {
        streetTitle: "Karla Libknehta 91",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"}
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "JS"
        }
]}

const copyStudent = {...student}
console.log(copyStudent)