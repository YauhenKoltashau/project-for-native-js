import {student, StudentType} from "../02/02";

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({id: new Date().getTime(), title: skill})

}

export const addStatus = (student: StudentType) => {
    student.isActive = true
}

export function checkcity(s: StudentType, cityName: string) {
    return student.address.city.title === cityName
}