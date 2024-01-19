import React from "react";
import Todoitem from "./TodoItem";
import "./style.css";

interface TodoitemProps {
  title: string;
  id: number;
}

interface TodoProps {
  items: TodoitemProps[];
}

const Todo: React.FC<TodoProps> = (props) => {
  return (
    <div className="todo-container">
      <ol>
        {props.items.map((item) => (
          <Todoitem key={item.id} title={item.title} />
        ))}
      </ol>
    </div>
  );
};

export default Todo;
