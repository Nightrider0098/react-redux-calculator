const action = require('./action')
const reducer = require('./reducers')
const initialState = require('./states')

describe("Testing Actions", () => {
    describe("testing the add button", () => {
        // testing add OPERATOR
        it("add action should be defined", () => {
            expect(action.add).not.toBe(undefined)
        })
        it("add action should be function ", () => {
            expect(typeof (action.add)).toBe("function")
        })
        it("add action should  have payload defined", () => {
            expect(action.add().payload).not.toBe(undefined)
        })
        it("add action should  have payload defined as function", () => {
            expect(typeof (action.add().payload)).not.toBe("function")
        })
    })

    describe("testing subtract OPERATOR", () => {

        it("subtract action should be defined", () => {
            expect(action.subtract).not.toBe(undefined)
        })
        it("subtract action should be function ", () => {
            expect(typeof (action.subtract)).toBe("function")
        })
        it("subtract action should  have payload defined", () => {
            expect(action.subtract().payload).not.toBe(undefined)
        })
        it("subtract action should  have payload defined as function", () => {
            expect(typeof (action.subtract().payload)).not.toBe("function")
        })
    })

    describe("testing multiply OPERATOR", () => {
        it("multiply action should be defined", () => {
            expect(action.multiply).not.toBe(undefined)
        })
        it("multiply action should be function ", () => {
            expect(typeof (action.multiply)).toBe("function")
        })
        it("multiply action should  have payload defined", () => {
            expect(action.multiply().payload).not.toBe(undefined)
        })
        it("multiply action should  have payload defined as function", () => {
            expect(typeof (action.multiply().payload)).not.toBe("function")
        })
    })

    describe("testing division OPERATOR", () => {
        it("division action should be defined", () => {
            expect(action.division).not.toBe(undefined)
        })
        it("division action should be function ", () => {
            expect(typeof (action.division)).toBe("function")
        })
        it("division action should  have payload defined", () => {
            expect(action.division().payload).not.toBe(undefined)
        })
        it("division action should  have payload defined as function", () => {
            expect(typeof (action.division().payload)).not.toBe("function")
        })
    })

    describe("testing CLEAN button", () => {
        it("CLEAN action should be defined", () => {
            expect(action.clear).not.toBe(undefined)
        })
        it("CLEAN action should be function ", () => {
            expect(typeof (action.clear)).toBe("function")
        })
    })

    describe("testing equal button", () => {
        it("equal action should be defined", () => {
            expect(action.equal()).not.toBe(undefined)
        })
        it("equal action should be function ", () => {
            expect(typeof (action.equal)).toBe("function")
        })
    })

    describe("testing changeSign() button", () => {
        it("changeSign() action should be defined", () => {
            expect(action.changeSign()).not.toBe(undefined)
        })
        it("changeSign action should be function ", () => {
            expect(typeof (action.changeSign)).toBe("function")
        })
    })

})

describe("Testing Reducers", () => {

    describe('default cases', () => {
        it("undefined action should not return undefined  ", () => {
            expect(reducer({}, {})).not.toBe(undefined)
        })
        it("undefined action should return initial state  ", () => {
            expect(reducer(initialState, {})).toBe(initialState)
        })
        it("undefined action with some states should return same state ", () => {
            previousState = {
                number: 5,
                storedFunc: (a) => { return (10 / a) },
                lastAction: "TYPE"
            }
            expect(reducer(previousState, {})).toBe(previousState)
        })
    })

    describe('clearn screen ', () => {
        it("CLEAN Action should return to initial state", () => {
            const previousState = {
                number: 50,
                storedFunc: (x) => x
            }

            expect(reducer(previousState, action.clear())).toBe({ ...initialState, lastAction: 'CLEAR' })
        })
        it("CLEAN Action should work even when we used at initial state", () => {
            expect(reducer(initialState, action.clear())).toBe({...initialState, lastAction: 'CLEAR' })
        })
    })

    describe("Digit input<1,2,34,5,6,7,8,9>", () => {
        it("type should work after CLEAN Action/initialState", () => {
            expect(reducer(initialState, action.type(1))).toBe({
                ...initialState,
                lastAction: 'TYPE',
                number: 1
            })
        })
        it("type should work after TYPE action", () => {
            expect(reducer({ ...initialState, number: 5, lastAction: "TYPE" }, action.type(1))).toBe({
                ...initialState, number: 51, lastAction: "TYPE"
            })
        })
        it("TYPE action after EQUAL action should reset the number variable", () => {

            const previousState = { number: 45, lastAction: "EQUAL", storedFunc: (x) => x }
            expect(reducer(previousState, action.type(5))).toBe({ ...previousState, number: 5, lastAction: "TYPE" })
        })
        it("TYPE action after OPERATOR should only update the number not evaluate consicutively", () => {
            const previousState = {
                number: 45,
                lastAction: "OPERATOR",
                storedFunc: (a) => { return (12 / a) }
            };

            expect(reducer(previousState, action.type(5))).toBe({ ...previousState, number: 5, lastAction: "TYPE" })

        })
    })

    describe("signChange button", () => {
        it("signChange action should change sign when last action is EQUAL ", () => {
            const previousState = {
                number: 15,
                storedFunc: (a) => {
                    return (15 - a)
                },
                lastAction: "EQUAL"
            }
            const expectedState = {
                ...previousState,
                number: -15,
                lastAction: "CHANGE_SIGN"
            }
            expect(reducer(previousState, action.changeSign())).toBe(expectedState)
        })
        it("signChange Aciton  should change the sign when last action is SignChange", () => {
            const previousState = {
                number: 15,
                storedFunc: (a) => {
                    return (15 - a)
                },
                lastAction: "CHANGE_SIGN"
            }
            const expectedState = {
                ...previousState,
                number: -15,
                lastAction: "CHANGE_SIGN"
            }
            expect(reducer(previousState, action.changeSign())).toBe(expectedState)
        })
        it("signChange Action after OPERATOR action should only set the number to zero and other parameters should not change", () => {
            const previousState = {
                number: 45,
                storedFunc: (a) => {
                    return (12 * a)
                },
                lastAction: "OPERATOR"

            }
            const expectedState = {
                ...previousState,
                number: 0,
                lastAction : "CHANGE_SIGN"

            }
            expect(reducer(previousState, action.changeSign())).toBe(expectedState)
        })
        it("signChange Aciton  should  change the sign when last action is TYPE", () => {
            const previousState = {
                number: 15,
                storedFunc: (a) => {
                    return (15 - a)
                },
                lastAction: "TYPE"
            }
            const expectedState = {
                ...previousState,
                number: -15,
                lastAction: "CHANGE_SIGN"
            }
            expect(reducer(previousState, action.changeSign())).toBe(expectedState)
        })

    })

    describe("equal button testing", () => {
        // not considering the case when we have consicutive EQUAL
        it("equal action should compute the result of OPERATOR", () => {
            previousState = {
                number: 5,
                storedFunc: (a) => { return (10 / a) },
                lastAction: "TYPE"
            }
            expectedState = {
                number: 2,
                storedFunc: (a) => { return (10 / a) },
                lastAction: "EQUAL"
            }
            expect(reducer(previousState, action.equal())).toBe(expectedState)
        })
        it("equal action should compute answer even when we have OPERATOR in lastAction and storeFunc should not change OPERATOR", () => {
            previousState = {
                number: 5,
                storedFunc: (a) => { return (10 / a) },
                lastAction: "OPERATOR"
            }
            expectedState = {
                number: 2,
                storedFunc: (a) => a,
                lastAction: "EQUAL"
            }
            expect(reducer(previousState, action.equal())).toBe(expectedState)
        })
    })

    describe("OPERATOR button ", () => {
        it("operatoin after OPERATOR action should just change the storeFunc", () => {
            previousState = {
                number: 42,
                storedFunc: (a) => { return (45 + a) },
                lastAction: "OPERATOR"
            }
            expectedState = {
                number: 42,
                storedFunc: (a) => { return (45 / a) },
                lastAction: "OPERATOR"
            }
            expect(reducer(previousState, action.division())).toBe(expectedState)
        })
        it("operatoin after type action should just add the storeFunc", () => {
            previousState = {
                number: 42,
                storedFunc: (x) => x,
                lastAction: "TYPE"
            }
            expectedState = {
                number: 42,
                storedFunc: (a) => { return (45 / a) },
                lastAction: "OPERATOR"
            }
            expect(reducer(previousState, action.division())).toBe(expectedState)
        })
    })
})