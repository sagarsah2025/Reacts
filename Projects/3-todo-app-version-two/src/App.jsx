import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "12/12/2024",
    },
    {
      name: "Go to College",
      dueDate: "12/12/2024",
    },
    {
      name: "Like this video",
      dueDate: "right now",
    },
  ];

  return (
    <center classNameNameName="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
