import React from 'react';

let ToDoItem = (props) => {
    return (
        <div>
            <input type="checkbox" checked={props.item.completed}/>
            <p>{props.item.text}</p>
            <hr/>
        </div>
    )
}

export default ToDoItem;