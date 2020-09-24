function add() {
    return {
        type: "OPERATOR",
        // define a function accordingly
        payload: (x) => x
    }
}
function subtract() {
    return {
        type: "OPERATOR",
        // define a function accordingly
        payload: (x) => x
    }
}
function multiply() {
    return {
        type: "OPERATOR",
        // define a function accordingly
        payload: (x) => x
    }
}
function division() {
    return {
        type: "OPERATOR",
        // define a function accordingly
        payload: (x) => x
    }
}
function equal() {
    return {
        type: "EQUAL"
    }
}
function type(num) {
    return {
        type: "TYPE",
        payload: num
    }
}
function changeSign() {
    return {
        type: "CHANGE_SIGN"
    }
}
function clear() {
    return {
        type: 'CLEAR'
    }
}
module.exports = { add, subtract, multiply, division, equal, clear, changeSign, type };