import React from 'react'
import { useState } from 'react'
const [count,setcount]=usestate(10)
const increment=()=>{
    setcount((prevcount)=>prevcount+1);
};
const decrement=()=>{
    setcount((prevcount)=>prevcount-1);
}
export default function App9() {
  return (
    <div>
        <h1>App9</h1>
        <button onclick={decrement}>-</button>{count}<button onclick={increment}>+</button>
        </div>
  )
}
