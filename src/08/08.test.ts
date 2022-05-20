import {UsersType, UserType} from "./08";

let users: UsersType
let user: UserType

beforeEach(() => {
     users = {
        "7549854": {id: '7549854', name: 'Yauhen'},
        "7549889": {id: '7549889', name: 'Pavel'},
        "7549876": {id: '7549876', name: 'Sergey'},
        "7549333": {id: '7549333', name: 'Iryna'},
    }
})

test('users should be changed in depend of the condition',()=>{
    users['7549889'].name = 'Pashka'
    user = {id: '6666666', name: 'Slogny'}
    users['6666666']=user
    delete users['7549876']


    expect(users['7549889']).toStrictEqual({id: '7549889', name: 'Pashka'})
    expect(users['6666666']).toStrictEqual({id: '6666666', name: 'Slogny'})
    expect(users['7549876']).toBeUndefined()

})