export type UsersType = {
    [key: string]: UserType
}
export type UserType = { id: string, name: string }

let users:UsersType  = {
    "7549854": {id: '7549854', name: 'Yauhen'},
    "7549889": {id: '7549889', name: 'Pavel'},
    "7549876": {id: '7549876', name: 'Sergey'},
    "7549333": {id: '7549333', name: 'Iryna'},
}

let user:UserType = {id: '4849933', name: 'Ivanko'}

users['4849933'] = user
users['7549876'].id = '8478392'
users['7549333'].name = 'Petya'
delete users['4849933']
