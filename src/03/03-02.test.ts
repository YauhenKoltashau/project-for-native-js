import {cityType} from "../02/02";
import {addMoneyToBudget, createMessage, repairHouse, toHireStaff} from "./03-02";
let city: cityType;

beforeEach(() => {
        city = {
            title: "New York",
            houses: [
                {
                    buildArt: 2012,
                    repaired: false,
                    address: {
                        number: 100,
                        street: {
                            id: 1,
                            title: "White park"
                        }
                    }
                },
                {
                    buildArt: 2003,
                    repaired: false,
                    address: {
                        number: 15,
                        street: {
                            id: 2,
                            title: "Garden park"
                        }
                    }
                },
                {
                    buildArt: 2020,
                    repaired: true,
                    address: {
                        number: 220,
                        street: {
                            id: 3,
                            title: "Da Vinchi street"
                        }
                    }
                }
            ],
            governmentBuildings: [
                {
                    type: "HOSPITAL",
                    budget: 200000,
                    stuffcount: 500,
                    address: {
                        number: 130,
                        street: {
                            id: 4,
                            title: "Engelsa street"
                        }
                    }
                },
                {
                    type: "POLICE",
                    budget: 500000,
                    stuffcount: 2000,
                    address: {
                        number: 140,
                        street: {
                            id: 5,
                            title: "Lugovaya street"
                        }
                    }

                }
            ],
            citizensNumber: 1000000
        }
    }
)
test("Budget should be changed for HOSPITAL", () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);
    expect(city.governmentBuildings[0].budget).toBe(300000)
    expect(city.governmentBuildings[1].budget).toBe(500000)
})

test("Budget should be changed for POLICE", () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);
    expect(city.governmentBuildings[0].budget).toBe(200000);
    expect(city.governmentBuildings[1].budget).toBe(400000)
})

test("The house should be repaired", () => {
    repairHouse(city.houses[1]);

    expect(city.houses[0]).toBeTruthy()
    expect(city.houses[1]).toBeTruthy()
    expect(city.houses[2]).toBeTruthy()

})

test("The Staff should be increased", () => {
    toHireStaff(city.governmentBuildings[0],100)

    expect(city.governmentBuildings[0].stuffcount).toBe(600)
    expect(city.governmentBuildings[1].stuffcount).toBe(2000)

})

test("Greeting citizens New York should be corrected", () => {
    const message = createMessage(city)
    expect(message).toBe("We greeting New York city.All 1000000 citizens")
})