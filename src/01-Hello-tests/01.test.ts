import {multi, sum, splittingWords} from "./01";
import exp from "constants";

let a: number;
let b: number;
let c: number;
beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})
test("sum should be corrected", () => {
   // action
    const result1 = sum(a, b);
    const result2 = sum (b, c);
    // expect result
    expect(result1).toBe(3);
    expect(result2).toBe(5)
    }
)
test("multiply should be corrected", () => {
    //action
    const result3 = multi(a, b)
    const result4 = multi(b, c)
    //expect result
    expect(result3).toBe(2)
    expect(result4).toBe(6)
})

test ("splitting into words should be corrected", () => {
    //data
    const sent1 = "I am learning React daily";
    const sent2 = "JS - the best programming  language nowadays!"
    //action
    const result = splittingWords(sent1);
    const result1 = splittingWords(sent2);
    //expect result
    expect(result.length).toBe(5)
    expect(result[0]).toBe("i")
    expect(result[1]).toBe("am")
    expect(result[2]).toBe("learning")
    expect(result[3]).toBe("react")
    expect(result[4]).toBe("daily")

    expect(result1.length).toBe(6)
    expect(result1[0]).toBe("js")
    expect(result1[1]).toBe("the")
    expect(result1[2]).toBe("best")
    expect(result1[3]).toBe("programming")
    expect(result1[4]).toBe("language")
    expect(result1[5]).toBe("nowadays")
})
