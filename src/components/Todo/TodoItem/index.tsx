import React from "react";
import "./style.css";

interface TodoitemProps {
  title:string;
}

const Todoitem: React.FC<TodoitemProps> = (props) => {
  return <li>{props.title}</li>;
};

export default Todoitem;
