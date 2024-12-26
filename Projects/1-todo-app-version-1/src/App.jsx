import AppName from "./AppName";
import AddTodo from "./AddTodo";
import TodoItem1 from "./Todoitem1";
import TodoItem2 from "./TodoItem2";
import "./App.css";

function App() {
  return (
    <center classNameNameName="todo-container">
      <AppName />
      <AddTodo />
      <div classNameNameName="items-container">
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App;
