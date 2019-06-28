import {noteData} from './firebaseConnect';
var redux = require('redux');

const noteInitialState = {
    isEdit: false
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            console.log('du lieu nhanh duoc la :'+ action.getItem );
            noteData.push(action.getItem);
            return state
        case 'CHANGE_EDIT_STATUS':
            return {...state,isEdit : !state.isEdit}
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
export default store;