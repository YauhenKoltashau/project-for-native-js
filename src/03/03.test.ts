import {StudentType} from "../02/02";
import {addSkill, addStatus, checkcity} from "./03";



let student: StudentType;
beforeEach(() => {
    student = {
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
})

test("the skill should be added", () => {
expect(student.technologies.length).toBe(3)
    addSkill(student, "React")

expect(student.technologies.length).toBe(4)
expect(student.technologies[3].id).toBeDefined()
expect(student.technologies[3].title).toBe("React")
})

test("the student should be made active", () => {
    addStatus(student)
expect(student.isActive).toBe(true)

})

test("Where the student lives should be checked", () => {

    let result1= checkcity(student, "Moscow")
    let result2= checkcity(student, "Minsk")

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})