
const action = require('./action')
const initialState = require('./states')
function lastActionDefine(state, action) {
    if (action.type == undefined) { return state }
    return { ...state, lastAction: action.type };
}
function handleOperation(state, action) {
    if (state.lastAction == 'EQUAL') {
        var myFun = (a) => action.func(state.originalFunc(state.number), a);
        return {
            ...state,
            operation: action.func,
            storedFunc: myFun,
            number: state.number
        };
    } else if (state.lastAction == 'OPERATION') {
        var myFun = (a) => action.func(state.number, a);
        return {
            ...state,
            operation: action.func,
            storedFunc: myFun,
            number: state.number
        };

    }
    var myFun = (a) => action.func(state.storedFunc(state.number), a);
    return {
        ...state,
        operation: action.func,
        originalFunc: state.storedFunc,
        storedFunc: myFun,
        number: state.storedFunc(state.number)
    };
}
function handleEqual(state, action) {
    if (state.lastAction !== 'EQUAL') {
        var myFun = (a) => {
            return state.operation(a, state.number);
        }

        return {
            ...state,
            storedFunc: myFun,
            number: state.storedFunc(state.number)
        };
    } else {
        return {
            ...state,
            number: state.storedFunc(state.number)
        };

    }
}
function help(state, action) {
    const newState = lastActionDefine(state, action)
    function a(action) {
        if (typeof state === 'undefined') {
            return initialState;
        }

        switch (action.type) {
            case "TYPE":
                var number = state.number;
                if (state.lastAction !== 'TYPE') {
                    number = 0;
                }
                return { ...state, number: 10 * number + action.payload };
            case 'CLEAN':
                return initialState;
            case 'CHANGE_SIGN':
                if (state.lastAction === 'OPERATION') {
                    return { ...state, number: 0 }
                } else if (state.lastAction === 'EQUAL') {
                    return { ...state, number: -state.number, storedFunc: (x) => x }
                }

                return { ...state, number: -state.number }
            case "OPERATION":
                return handleOperation(state, action);
            case "EQUAL":
                return handleEqual(state, action);

            default:
                return state
        }
    }
    return { ...a(action), lastAction: newState['lastAction'] }
}

module.exports = help
