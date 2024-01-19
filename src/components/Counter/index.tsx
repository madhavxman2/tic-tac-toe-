import React, { useEffect } from "react";
import './style.css';

const Counter: React.FC = () => {
  const [value, setValue] = React.useState(0);
  useEffect(()=>{
    console.log('Mounted : ',value);
    return ()=>{
      console.log('Unmounted : ',value);
    }
  },[value])
  return (
    <>
      <h1>Counter</h1>
    <div className="counter-container">
      <button style={{backgroundColor:'green'}} onClick={() => setValue(value + 1)}>+</button>
      <span>{value}</span>
      <button style={{backgroundColor:'red'}} onClick={() =>value >0 ? setValue(value - 1) : 0}>-</button>
    </div>
    </>
  );
};

export default Counter;
