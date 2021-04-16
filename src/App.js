import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {doIncrement,doDecrement} from "./Redux";


export default function App(){
  const state=useSelector((state)=> state)
  const dispatch= useDispatch();
  const {counter}=state;

  return(
    <>
      <h1>counter: {counter}</h1>
      <button onClick={()=> dispatch(doIncrement(1))}>Click</button>
      <button onClick={()=> dispatch(doDecrement(1))}>Click</button>
    </>
  )
}