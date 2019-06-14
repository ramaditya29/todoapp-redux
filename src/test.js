const { createStore, combineReducers } = require('redux');
const todoreducer = (state = [] , action) => {
    switch(action.type){
        case 'ADD_TODO' : return [ ...state, 
                            {
                                id: Math.floor(Math.random() * 1000),
                                completed : false,
                                value: action.text
                            }
                          ];
                          
        case 'TOGGLE_TODO': return state.map((item, idx) => item.id === action.id ? { ...item, completed: !item.completed} : item);
        default : return state;

    }
}


let reducers =  combineReducers({
    todo: todoreducer
});
let store = createStore(reducers);
console.log(store.getState());
store.dispatch({type: 'ADD_TODO' , text: 'Test Prep'});

console.log(store.getState());
store.dispatch({type: 'TOGGLE_TODO', id : 488});
console.log(store.getState());