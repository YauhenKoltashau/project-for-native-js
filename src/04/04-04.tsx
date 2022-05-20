export type ManType = {
    name: string
    age: number
}
/*type MapComponentType = {
    stack: Array<string>
    name: string
    age: number
}*/
export const people: Array<ManType> = [
    {name: 'Ivan Ivanov', age: 33},
    {name: 'Boris Borisov', age: 32},
    {name: 'Igor Igorev', age: 23}

]
export const CreateGreetingMessage = (people: Array<ManType>) =>{
    return people.map(man=>`Hi ${man.name.split(" ")[0]}.Greeting you in IT-incubator`)
}

const peopleTransformater = (man: ManType) => {
    return {
        stack: ['CSS', 'HTML', 'JS', 'React'],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]
    }
}
export const MapComponent = () => {
    const developers = people.map(peopleTransformater)
    return (
        <ul>
            {developers.map((el,index) => {
                    return (

                        <li key={index}>stack:{el.stack } firstName:{el.firstName } lastName:{el.lastName }</li>
                    )



                }
            )
            }

        </ul>
    )
}







