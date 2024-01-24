import React from "react";
import Todo from "./components/Todo";
import Counter from "./components/MountUnmount";

const App: React.FC = () => {
    const itemList=[
        {
          title: "Todo 1",
          id:1
        },
        {
          title: "Todo 2",
          id:2
        },
        {
          title: "Todo 3",
          id:3
        }
    ]
  return (
    <>
      <Todo items={itemList} />
      <Counter/>
    </>
  );
};

export default App;
