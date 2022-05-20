import {cityType, GovernType, HouseType} from "../02/02";

export const addMoneyToBudget = (governBuilding: GovernType, toBudget: number) => {
    governBuilding.budget += toBudget
}



export const repairHouse = (houseType: HouseType) => {

    houseType.repaired = true
}

export const toHireStaff =  (govern: GovernType, stuffNumber: number) => {
    govern.stuffcount += stuffNumber
}

export const createMessage = (city: cityType) => {
    return `We greeting ${city.title} city.All ${city.citizensNumber} citizens`
}