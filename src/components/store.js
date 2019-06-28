import {noteData} from './firebaseConnect';
var redux = require('redux');

const noteInitialState = {
    isEdit: false,
    editItem :{}
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            console.log('du lieu nhanh duoc la :'+ action.getItem );
            noteData.push(action.getItem);
            return state
        case 'CHANGE_EDIT_STATUS':
            return {...state,isEdit : !state.isEdit}
        case 'GET_EDIT_DATA':
            return {...state,editItem : action.editObject}
        case 'EDIT':
            noteData.child(action.getItem.id).update({
                noteTitle : action.getItem.noteTitle,
                noteContent : action.getItem.noteContent
            })
            console.log('cap nhap du lieu  :'+JSON.stringify(action.getItem)+ 'thanh cong');
            return {...state,editItem : {}}
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(function(){
    console.log(JSON.stringify(store.getState()));
})
export default store;