import {cityType} from "./02";

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
                    repaired: true,
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
                    repaired: false,
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
                    budget: 100000,
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

test("the city should contains 3 houses", () => {
    expect(city.title).toBe("New York")
    expect(city.houses.length).toBe(3);
    expect(city.houses[0].buildArt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe("White park");

    expect(city.houses[1].buildArt).toBe(2003);
    expect(city.houses[1].repaired).toBe(true);
    expect(city.houses[1].address.number).toBe(15);
    expect(city.houses[1].address.street.title).toBe("Garden park")

    expect(city.houses[2].buildArt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(220);
    expect(city.houses[2].address.street.title).toBe("Da Vinchi street")
})

test("the city should be contains 2 governBuilding", () => {
    expect(city.governmentBuildings.length).toBe(2);
    expect(city.governmentBuildings[0].type).toBe("HOSPITAL");
    expect(city.governmentBuildings[0].budget).toBe(100000);
    expect(city.governmentBuildings[0].stuffcount).toBe(500);
    expect(city.governmentBuildings[0].address.street.title).toBe("Engelsa street");

    expect(city.governmentBuildings[1].type).toBe("POLICE");
    expect(city.governmentBuildings[1].budget).toBe(500000);
    expect(city.governmentBuildings[1].stuffcount).toBe(2000);
    expect(city.governmentBuildings[1].address.street.title).toBe("Lugovaya street");

    expect(city.citizensNumber).toBe(1000000)
})