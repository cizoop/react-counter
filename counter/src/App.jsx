import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <h1>React counter:use of hooks</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Maximum value can go upto 20 and minimum value is 0.</p>
        <button onClick={()=>{if(count<20) setCount((count)=>count+1)}}>+1</button><br />
        <button onClick={()=>{if(count>0) setCount((count)=>count-1)}}>-1</button>
      </div>
    </>
  )
}

export default App
