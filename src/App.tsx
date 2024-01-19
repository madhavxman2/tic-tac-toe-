import React, { useState } from "react";
import Board from "./components/ticTacToe/Board";
import "./App.css";

const App: React.FC = () => {
    const [state,setState]=useState(Array(9).fill(null));
    const [currentTurn,setCurrentTurn]=useState("X");

    const checkWinner=(state:any[])=>{
      const wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
      ];
      for(let i=0;i<wins.length;i++){
        const [a,b,c]=wins[i];
        if(state[a]!==null && state[a] && state[a]===state[b] && state[a]===state[c]){
          return true;
        }
      }
      return false;
    }
    const handleBlockClick=(index:number)=>{
      const stateCopy=Array.from(state);
      if(stateCopy[index]!==null) return;
      stateCopy[index]=currentTurn;


      setCurrentTurn(currentTurn === "X"? "O" : "X");
      setState(stateCopy);

      // check if someone win
      const win=checkWinner(stateCopy);
      
      if(win){
        alert(`${currentTurn} won the game !`);
        setState(Array(9).fill(null));
      }
    }
    console.log(state);
  return (
    <div className="board">
      <div className="row">
        <Board  onClick={()=>handleBlockClick(0)} value={state[0]} />
        <Board onClick={()=>handleBlockClick(1)}  value={state[1]} />
        <Board onClick={()=>handleBlockClick(2)}  value={state[2]} />
      </div>
      <div className="row">
        <Board onClick={()=>handleBlockClick(3)}  value={state[3]} /> 
        <Board onClick={()=>handleBlockClick(4)}  value={state[4]} />
        <Board onClick={()=>handleBlockClick(5)}  value={state[5]} />
      </div>
      <div className="row">
        <Board  onClick={()=>handleBlockClick(6)} value={state[6]} />
        <Board onClick={()=>handleBlockClick(7)}  value={state[7]} />
        <Board  onClick={()=>handleBlockClick(8)} value={state[8]} />
      </div>
    </div>
  );
};

export default App;
