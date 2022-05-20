export type UserType = {
    name: string
    hair: number
    weight: number
    address: {title: string}
}
export type LaptopType = {title: string}
export type UserWithLaptopType = UserType & {laptop: LaptopType}
export type UserWithSameType=UserWithLaptopType&ReturnType<typeof copyUserSameType>
export type UserTypeWithBooks=ReturnType<typeof addBooksToUser>
export type UserWorkOtherCompanies=ReturnType<typeof updateUserWorks>
export type CompanyType = {
    id: number
    title: string
}
export type UserCompaniesType=
{Evgeny: {id: number, title: string}[], Pavel: {id: number, title: string}[]}

//OOP
export function barber (u:UserType, power: number) {
    u.hair= u.hair/power
}
// Clear function
export function makeHairStyle(u:UserType, power: number){
    let copy = {...u}
    copy = {...copy,hair: copy.hair/power,name: copy.name = 'Fedor',address: copy.address = {title: 'Pinsk'}}

    return copy
}
export function moveUserAddress (u:UserWithLaptopType, city:string) {
    return {...u, address:{...u.address,title: city}}
}
export function upgradeUserMac (u: UserWithLaptopType, laptop: string, power:number, city: "Berlin") {
    return {...u,laptop:{...u.laptop,title : laptop}, hair: u.hair/power,address:{...u.address,title: city}}
}
export function copyUserSameType(u:UserWithLaptopType,c:string){
    let copyUser = {...u}

    return {...copyUser,address:{...copyUser.address,country: c}}
}
export function addBooksToUser(u:UserWithLaptopType,m:Array<string>) {
    let copyUser = {...u}
    return {...copyUser,books:m}

}
export function addNewBooksCopyUser(u:UserTypeWithBooks,m:Array<string>){
    let userWithBooks = {...u}
    return{...userWithBooks,books:[...userWithBooks.books,...m]}
}
export function updateBooksCopyUser (u:UserTypeWithBooks,oldBook: string, newBook: string){

    return {
        ...u,books: u.books.map((b)=>b==oldBook?newBook:b)

}}
export const removeSomeBookUser = (u: UserTypeWithBooks,removeBook: string)=>(
    {
        ...u,books:u.books.filter((b)=>b!==removeBook)
    }
)
export const updateUserWorks = (u:UserWithLaptopType,companies:Array<CompanyType>)=>(
    {
        ...u,companies:companies
    }
)
export const addOffer = (u:UserWorkOtherCompanies,newCompany:CompanyType) => (
    {
        ...u,companies: [...u.companies,newCompany]
    }
)
export const updateTitleCompany = (u: UserWorkOtherCompanies, newTitleCompany:CompanyType) => (
    {
        ...u,companies: u.companies.map((c)=>c.id===newTitleCompany.id? {...c,title: newTitleCompany.title}:c)

    }
)

export const updateUserTitleCompany = (companies:UserCompaniesType,userName:string,id: number,title:string)=>{
    let copyCompanies = {...companies}
    copyCompanies["Evgeny"]=copyCompanies["Evgeny"].map(c=>c.id===id?{...c,title:title}:c)
    return copyCompanies
}





