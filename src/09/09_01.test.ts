import {UserType} from "./09_01";

function increaseAgeUser (u:UserType) {
    u.age++
}
type users = Array<UserType>



test('big test', ()=>{

    let user: UserType = {
        name: 'Igor',
        age: 30,
        address: {
            title: 'Minsk'
        }
    }

    increaseAgeUser(user)

    let user2: UserType = {
        name: 'Igor',
        age: 30,
        address: user.address
    }
    let address = user.address
    let users = [user,user2, {name:'Iryna', age:'35',address: address}]
    const admins = [user, users[2]]
    admins[1].name = 'Iryna Nikolaevna'

    expect(user.age).toBe(31)
    expect(user2.address).toEqual({
        title: 'Minsk'
    })
    expect(users[2]).toBeDefined()
    expect(users[2].address).toBe(address)
    expect(users[2].address.title).toBe('Minsk')
    expect(users[2].address.title).toBe(user2.address.title||user.address.title)
    expect(users[2].name).toBe('Iryna Nikolaevna')
})




