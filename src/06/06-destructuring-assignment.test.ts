import exp from "constants";

type streetType = {
    title: string
}
type addressType = {
    street: streetType
}
type lessonsType = {
    title: string
    name?: string
}
export type manType = {
    name: string
    age: number
    lessons: Array<lessonsType>
    address: addressType
}
let prps2

let props: manType
beforeEach(() => {

    props = {
        name: 'Ivan',
        age: 35,
        lessons: [{title: '1'}, {title: '2'}, {title: '3', name: 'React'}],
        address: {
            street:
                {title: "Nezalegnasty avenue"}
        }
    }
})

test("", () => {

    const {age, lessons, name} = props
    const {title} = props.address.street
    //const [lesson1, lesson2] =props.lessons
    const [ls1, ...restLessons] = props.lessons
    // const age = props.age
    // const lessons = props.lessons

    // const a = props.age
    // const l = props.lessons

    expect(age).toBe(35)
    expect(lessons.length).toBe(3)

    expect(name).toBe('Ivan')
    expect(title).toBe('Nezalegnasty avenue')
    expect(ls1.title).toBe('1')
    expect(restLessons.length).toBe(2)
    expect(restLessons[0].title).toBe('2')
    expect(restLessons[1]).toStrictEqual({title: '3', name: 'React'})

})