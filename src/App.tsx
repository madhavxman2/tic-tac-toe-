import React from "react";

import "./App.css";
import { useAppDispatch, useAppSelectore } from "./components/redux/hook";
import { increment,decrement } from "./components/redux/slice";
import Counter1 from "./components/redux/bearState";

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#04AA6D',
  color: 'white',
  border:'none',
  padding: '5px 25px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '30px',
  borderRadius:'10px'
};
function App() {
  const count = useAppSelectore((state)=>state.counter); 
  const dispatch = useAppDispatch();
  return (
    <>
      <h1 style={{textAlign:'center'}}>Counter App</h1>
    <div style={{display:'flex',alignItems:'center',gap:'10px',justifyContent:'center'}}>
    <button style={buttonStyle} onClick={()=>dispatch(increment())}>+</button>
      <h2 style={{textAlign:'center',backgroundColor:'aqua',borderRadius:'10px', paddingInline:'20px'}}>Count is {count}</h2>
    <button style={{...buttonStyle,background:'#d54040'}} onClick={()=>dispatch(decrement())}>-</button>
    </div> 
    <Counter1/>
    </>
  );
}

export default App;