export function addTodo(text){
    return {
        type: 'ADD_TODO',
        text
    }
}

export function toggleTodo(id){
    return {
        type: 'TOGGLE_TODO',
        id
    }
}