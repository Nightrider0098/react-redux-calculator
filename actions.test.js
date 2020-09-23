const action = require('./action')


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

// testing sub operation
test("sub action should be defined", () => {
    expect(action.sub).not.toBe(undefined)
})
test("sub action should be function ", () => {
    expect(typeof (action.sub)).toBe("function")
})
test("sub action should  have payload defined", () => {
    expect(action.sub().payload).not.toBe(undefined)
})
test("sub action should  have payload defined as function", () => {
    expect(typeof (action.sub().payload)).not.toBe("function")
})

// testing mul operation
test("mul action should be defined", () => {
    expect(action.mul).not.toBe(undefined)
})
test("mul action should be function ", () => {
    expect(typeof (action.mul)).toBe("function")
})
test("mul action should  have payload defined", () => {
    expect(action.mul().payload).not.toBe(undefined)
})
test("mul action should  have payload defined as function", () => {
    expect(typeof (action.mul().payload)).not.toBe("function")
})

// testing div operation
test("div action should be defined", () => {
    expect(action.div).not.toBe(undefined)
})
test("div action should be function ", () => {
    expect(typeof (action.div)).toBe("function")
})
test("div action should  have payload defined", () => {
    expect(action.div().payload).not.toBe(undefined)
})
test("div action should  have payload defined as function", () => {
    expect(typeof (action.div().payload)).not.toBe("function")
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

