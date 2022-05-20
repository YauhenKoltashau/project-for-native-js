import {CreateGreetingMessage, ManType} from "./04-04";

let people: Array<ManType>

beforeEach(()=>{
    people = [
        {name: 'Ivan Ivanov', age: 33},
        {name: 'Boris Borisov', age: 32},
        {name: 'Igor Igorev', age: 23}

    ]
})
test("Should get array of greeting messages", ()=>{
    const message = CreateGreetingMessage(people)
    expect(message[0]).toBe("Hi Ivan.Greeting you in IT-incubator")
    expect(message[1]).toBe("Hi Boris.Greeting you in IT-incubator")
    expect(message[2]).toBe("Hi Igor.Greeting you in IT-incubator")
})