import React from 'react';
import './App.css';
import ToDoItem from './ToDo/ToDo';
import ToDoData from './todoData';


function App() {
  let toDo = ToDoData.map(item => {
    return (
      <ToDoItem key={item.id} item={item}/>
    )
  })
  return (
    <div className="App">
      {toDo}
    </div>
  );
}

export default App;
