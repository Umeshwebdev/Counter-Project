import { useState } from "react"
import "./App.css"

function App() {
  const[count,setCount]=  useState(0);

function handlechange(){
  setCount(count+1)
}

  return (
    <>
      <div className="Counter-box">
        <h1>Counter: </h1>
        <h1>{count}</h1>
        <button onClick={handlechange}>Click</button>
      </div>
    </>
  )
}

export default App
