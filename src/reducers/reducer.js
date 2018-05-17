
const  addItemHandler = (state, payload) => {
    const item = {
        id: Math.random(),
        value: payload,
        checked: false,
    };
    const newState = state.items.concat(item);
    return {...state, items: newState};

};

const removeItemHandler = (state, payload) => {
    const newState = state.items.filter( el => (el.id !== payload.id) );

    return {...state, items: newState};

}
const  checkItemHandler = (state, payload) => {
    const newState = state.items.map( el => {
        if(el.id === payload.id){
            return{...el, checked: !el.checked}
        }
        return el
    });
    return {...state, items: newState}

};
const  editItemHandler = (state, payload) => {

    const newState = state.items.map( el => {
        if(el.id === payload.id){
            return{...el, value: payload.data}
        }
        return el
    });
    return {...state, items: newState}

};

export default (state = [], action) => {
    const { type, payload } = action;
    switch(type) {
        case 'ADD_ITEM':
        return addItemHandler(state,payload);
        case 'REMOVE_ITEM':
            return removeItemHandler(state,payload);
        case 'CHECK_ITEM':
            return checkItemHandler(state,payload);
        case 'EDIT_ITEM':
            return editItemHandler(state,payload);
        default:
            return state;
    }
}