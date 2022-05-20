import {
    addBooksToUser,
    addNewBooksCopyUser,
    addOffer,
    barber,
    copyUserSameType,
    makeHairStyle,
    moveUserAddress,
    removeSomeBookUser,
    updateBooksCopyUser,
    updateTitleCompany,
    updateUserTitleCompany,
    updateUserWorks,
    upgradeUserMac,
    UserCompaniesType,
    UserType,
    UserTypeWithBooks,
    UserWithLaptopType

} from "./10_01";

let user1: UserType


beforeEach(() => {
    user1 = {
        name: 'Ivan',
        hair: 200,
        weight: 85,
        address: {
            title: 'Minsk'
        }

    }
})
test('OOPfunction type test', () => {
    barber(user1, 4)
    expect(user1.hair).toBe(50)
    expect(user1.address).toStrictEqual({title: 'Minsk'})
    expect(user1.name).toBe('Ivan')

})
test('clearFunction type test', () => {
    const copyUser = makeHairStyle(user1, 2)
    expect(copyUser.hair).toBe(100)
    expect(user1.hair).toBe(200)
    expect(copyUser.name).toBe('Fedor')
    expect(user1.name).toBe('Ivan')
    expect(copyUser.address).not.toBe(user1.address)
    expect(copyUser.weight).toBe(user1.weight)
    expect(copyUser.address).toStrictEqual({title: 'Pinsk'})
    expect(user1.address).toStrictEqual({title: 'Minsk'})
})
test('user should be moved', () => {
    let user3: UserWithLaptopType = {
        name: 'Ivan',
        hair: 200,
        weight: 85,
        address: {
            title: 'Minsk'
        },
        laptop: {title: 'Macbook'}
    }
    const movedUser = moveUserAddress(user3, 'New York' )
    expect(user3).not.toBe(movedUser)
    expect(user3.address).not.toBe(movedUser.address)
    expect(movedUser.address.title).toBe('New York')
    expect(user3.address.title).toBe('Minsk')
    expect(movedUser.laptop).toStrictEqual({title: 'Macbook'})
})
test('macbook should upgrade to macbookPro', () => {
    let user3: UserWithLaptopType = {
        name: 'Ivan',
        hair: 200,
        weight: 85,
        address: {
            title: 'Minsk'
        },
        laptop: {title: 'Macbook'}
    }
    const upgradeLaptopUser = upgradeUserMac(user3, 'MacPro', 2 , "Berlin")
    expect(user3).not.toBe(upgradeLaptopUser)
    expect(upgradeLaptopUser.address.title).toBe('Berlin')
    expect(user3.address.title).toBe('Minsk')
    expect(upgradeLaptopUser.laptop).toStrictEqual({title: 'MacPro'})
    expect(upgradeLaptopUser.hair).toBe(100)
    expect(user3.hair).toBe(200)
    expect(user3.address.title).not.toBe(upgradeLaptopUser.address.title)


})
test('new user should be the as previous user, but they won_t equal ', () => {
    let user4: UserWithLaptopType = {
        name: 'Ivan',
        hair: 200,
        weight: 85,
        address: {
            title: 'Minsk'
        },
        laptop: {title: 'Macbook'}
    }
    const sameUser = copyUserSameType(user4,'Belarus')

    expect(sameUser).not.toBe(user4)
    expect(sameUser.name).toBe('Ivan')
    expect(sameUser.name).toBe(user4.name)
    expect(sameUser.laptop.title).toBe('Macbook')
    expect(sameUser.address).toEqual({
        title: 'Minsk',
        country: 'Belarus'
    })
    expect(sameUser.address.country).toBe('Belarus')
    expect(user4.address).toEqual({
        title: 'Minsk'
    })



})
test('new books should be added',()=>{
    let user5: UserWithLaptopType = {
        name: 'Ivan',
        hair: 200,
        weight: 85,
        address: {
            title: 'Minsk'
        },
        laptop: {title: 'Macbook'}
    }
    let userBooks:UserTypeWithBooks = addBooksToUser(user5,['html','css','js'])
    expect(userBooks.books[0]).toBe('html')
    let userMoreBooks = addNewBooksCopyUser(userBooks,['react','ts'])
    expect(userMoreBooks.books.length).toBe(5)
    expect(userMoreBooks.books[3]).toBe('react')
    expect(userMoreBooks.books[4]).toBe('ts')
})
test('the old book should be updated new book',()=>{
    let user5: UserWithLaptopType = {
        name: 'Ivan',
        hair: 200,
        weight: 85,
        address: {
            title: 'Minsk'
        },
        laptop: {title: 'Macbook'}
    }
    let userBooks:UserTypeWithBooks = addBooksToUser(user5,['html','css','js'])
    expect(userBooks.books[0]).toBe('html')

    let userUpdateBooks = updateBooksCopyUser(userBooks,'js', 'ts')
    expect(userUpdateBooks.books.length).toBe(3)
    expect(userUpdateBooks).not.toBe(userBooks)
    expect(userUpdateBooks.books[0]).toBe('html')
    expect(userUpdateBooks.books[1]).toBe('css')
    expect(userUpdateBooks.books[2]).toBe('ts')
    expect(userBooks.books[2]).toBe('js')

})
test('remove book about js',()=>{
    let user5: UserWithLaptopType = {
        name: 'Ivan',
        hair: 200,
        weight: 85,
        address: {
            title: 'Minsk'
        },
        laptop: {title: 'Macbook'}
    }
    let userBooks:UserTypeWithBooks = addBooksToUser(user5,['html','css','js'])
    expect(userBooks.books[0]).toBe('html')

    let userUpdateBooks = removeSomeBookUser(userBooks,'css')
    expect(userUpdateBooks.books.length).toBe(2)
    expect(userUpdateBooks).not.toBe(userBooks)
    expect(userUpdateBooks.books[1]).toBe('js')
    expect(typeof userUpdateBooks).toBe(typeof userBooks)
})
test('companies should be added to user and new company should be added to user_s companies  ',()=>{
    let userBooks: UserWithLaptopType = {
        name: 'Ivan',
        hair: 200,
        weight: 85,
        address: {
            title: 'Minsk'
        },
        laptop: {title: 'Macbook'}
    }

    let userWorkOtherCompanies = updateUserWorks(userBooks,[{id:1,title:'epam'},{id:2,title:'PHT'}])
    expect(userWorkOtherCompanies.companies).toBeDefined()
    expect(userWorkOtherCompanies.companies).toStrictEqual([{id:1,title:'epam'},{id:2,title:'PHT'}])
    expect(userWorkOtherCompanies.companies[0]).toStrictEqual({id:1,title:'epam'})

    let userGotNewOffer = addOffer(userWorkOtherCompanies,{id:3, title:'IT-INCUBATOR'})
    expect(userGotNewOffer.companies.length).toBe(3)
    expect(typeof userGotNewOffer).toBe(typeof userWorkOtherCompanies)
    expect(userGotNewOffer).not.toBe(userWorkOtherCompanies)
    expect(userGotNewOffer.companies[2]).toEqual({id:3, title:'IT-INCUBATOR'})
    const userUpdateTitleCompany = updateTitleCompany(userGotNewOffer,{id:3, title: 'Google'})
    expect(userUpdateTitleCompany.companies[2]).toEqual({id:3, title: 'Google'})
    expect(userUpdateTitleCompany.companies[2].title).toBe('Google')
    expect(userGotNewOffer.companies[2].title).toBe('IT-INCUBATOR')
    expect(userWorkOtherCompanies.companies).not.toBe(userGotNewOffer.companies)


})
 test('title company should be changed',()=>{

     const companies = {
         Evgeny:[{id:1, title:'IT-Incubator'},{id:2, title: 'Ep'}],
         Pavel:[{id:1, title:'Education centr PHT'}]
     }

     let updatedTitleCompanyByUser:UserCompaniesType = updateUserTitleCompany(companies,'Evgeny',1,'Epam')
     expect(updatedTitleCompanyByUser['Evgeny'][0].title).toBe('Epam')
     expect(companies).not.toBe(updatedTitleCompanyByUser)
     expect(companies["Evgeny"]).not.toBe(updatedTitleCompanyByUser["Evgeny"])



 })