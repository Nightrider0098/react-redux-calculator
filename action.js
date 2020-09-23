function add() {
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
function type() {
    return {
        type: "TYPE"
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
module.exports = {add,equal,clear,changeSign,type};