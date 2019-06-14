import React from 'react';

const TodoList = (props) => {
    let todolistItems = props.todoitems.map( (item, idx) => {
        if(item.completed){
            return (<li key={idx} className="completed" onClick={ () => props.toggleHandler(item)}>{ item.value } </li>);
        } else {
            return (<li key={idx} onClick={ () => props.toggleHandler(item)}>{ item.value } </li>);
        }
            
    })
    return (
        <ul>
            {todolistItems}
        </ul>
    );
}

export default TodoList;