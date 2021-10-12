import logo from './logo.svg';
import './App.css';
import ToDoListRedux from "./Todolist/ToDoListRedux";
import TodolistRFC from "./Todolist/TodolistRFC";
import TodolistRCC from "./Todolist/TodolistRCC";

function App() {
    return <div className='container'>
        <ToDoListRedux/>
        {/*<TodolistRFC/>*/}
        {/*<TodolistRCC/>*/}
    </div>
    ;
}

export default App;
