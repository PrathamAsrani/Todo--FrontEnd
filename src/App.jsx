import { useEffect, useState } from "react";
import Todo from "./Components/Todo";
import { getAllTodo, addTodo, updateTodo, deleteTodo } from "./utils/HandleApi";

function App() {
  const [TodoData, setTodoData] = useState([]);
  const [Text, setText] = useState("");
  const [isUpdating, setisUpdating] = useState(false); 
  const [Todo_Id, setTodo_Id] = useState("");

  const updateMode = (_id, text) => {
    setisUpdating(true);
    setText(text);
    setTodo_Id(_id); 
  }


  useEffect(() => {
    getAllTodo(setTodoData);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1 className="Headings">Todo</h1>
        <div className="top">
          <input
            className="InputField"
            type="text"
            placeholder="Write Your Todo"
            value={Text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button
            className="Button"
            onClick={
              isUpdating
                ? () => updateTodo(Todo_Id, Text, setText, setTodoData, setisUpdating)
                : () => addTodo(Text, setText, setTodoData)
            }
          >
            {isUpdating ? `Update` : `Add`}
          </button>
        </div>
        <div className="list">
          {TodoData.map((item, index) => {
            return (
            <Todo 
              key={item._id} 
              text={item.text} 
              updateMode = { () => updateMode(item._id, item.text) }
              deleteTodo = { () => deleteTodo(item._id, setTodoData) }
            />
          )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
