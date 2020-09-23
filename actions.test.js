const action = require('./action')
const reducer = require('./reducers')

// testing acitons

// testing add operation
test("add action should be defined", () => {
    expect(action.add).not.toBe(undefined)
})
test("add action should be function ", () => {
    expect(typeof (action.add)).toBe("function")
})
test("add action should  have payload defined", () => {
    expect(action.add().payload).not.toBe(undefined)
})
test("add action should  have payload defined as function", () => {
    expect(typeof (action.add().payload)).not.toBe("function")
})

// testing subtract operation
test("subtract action should be defined", () => {
    expect(action.subtract).not.toBe(undefined)
})
test("subtract action should be function ", () => {
    expect(typeof (action.subtract)).toBe("function")
})
test("subtract action should  have payload defined", () => {
    expect(action.subtract().payload).not.toBe(undefined)
})
test("subtract action should  have payload defined as function", () => {
    expect(typeof (action.subtract().payload)).not.toBe("function")
})

// testing multiply operation
test("multiply action should be defined", () => {
    expect(action.multiply).not.toBe(undefined)
})
test("multiply action should be function ", () => {
    expect(typeof (action.multiply)).toBe("function")
})
test("multiply action should  have payload defined", () => {
    expect(action.multiply().payload).not.toBe(undefined)
})
test("multiply action should  have payload defined as function", () => {
    expect(typeof (action.multiply().payload)).not.toBe("function")
})

// testing division operation
test("division action should be defined", () => {
    expect(action.division).not.toBe(undefined)
})
test("division action should be function ", () => {
    expect(typeof (action.division)).toBe("function")
})
test("division action should  have payload defined", () => {
    expect(action.division().payload).not.toBe(undefined)
})
test("division action should  have payload defined as function", () => {
    expect(typeof (action.division().payload)).not.toBe("function")
})


// testing clear action
test("clear action should be defined", () => {
    expect(action.clear).not.toBe(undefined)
})
test("clear action should be function ", () => {
    expect(typeof (action.clear)).toBe("function")
})

// testing equal action
test("equal action should be defined", () => {
    expect(action.equal).not.toBe(undefined)
})
test("equal action should be function ", () => {
    expect(typeof (action.equal)).toBe("function")
})


// testing changeSign action
test("changeSign action should be defined", () => {
    expect(action.changeSign).not.toBe(undefined)
})
test("changeSign action should be function ", () => {
    expect(typeof (action.changeSign)).toBe("function")
})





// testing Reducers

// default case
test("undefined action should return initial state  ", () => {
    expect(reducer({}, undefined)).toBe()
})



test("Clear Action should return to initial state", () => {
    reducer({}, action.clear())


})