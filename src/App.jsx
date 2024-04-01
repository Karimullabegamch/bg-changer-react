import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function change(){
  const color="#"+Math.round(Math.random()*10000000).toString(16)
  
  setCount(color)
  }
  return (
    <>
      
      <div className="card" style={{backgroundColor:count}}>
      
        <button onClick={change}>
          count is {count}
        </button>
        </div>
    
      
    </>
  )
}

export default App
