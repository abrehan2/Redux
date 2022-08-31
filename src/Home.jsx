import React from 'react';
import {useDispatch, useSelector} from "react-redux"

const Home = () => {

  const dispatch = useDispatch();
  const {c}  = useSelector(state => state.custom) // destructuing by accessing the reducer through state having the variable c

  const addBtn = () => {
dispatch({type: "increment"})
  }
    const subBtn = () => {
    dispatch({type: "decrement"})
  }

  const addBtnValue = () => {
    dispatch({type: "incrementByValue",
  payload: 25})
  }


    // ye value mujhe store main add kenni hai
  return (
    <div>
        <h2>{c}</h2>

        <button onClick={addBtn}>Increment</button>
            <button onClick={addBtnValue}>Increment by value</button>
        <button onClick={subBtn}>Decrement</button>
    </div>
  )
}

export default Home;

// WORKING KERWALNE KAY LIYE USEDISPATCH KO IMPORT KRO
// useSELECTOR ACCESS THE VALUE OF STATE