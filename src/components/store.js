var redux = require('redux');

const noteInitialState = {
    testThoi : 'day la test'
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            console.log('Ket noi thanh cong addData');
            return state
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
export default store;