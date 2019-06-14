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

export default todoreducer;