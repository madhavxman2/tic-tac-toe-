import React from "react";


interface BoardProps {
  value?: string | null;
  onClick?:()=>void
}
const Board: React.FC<BoardProps> = (props) => {
  return <div className="block" onClick={props.onClick}>{props.value}</div>;
};
export default Board;
