import './App.css'
import ButtonPage from './components/btn/ButtonPage'
import { useState } from 'react'


function App() {

  const [count, setCount] = useState(0)
  const countMore = () => {
      setCount( (count) => count + 1);
  }

  return (
    <> 
      <h1>Vite + React</h1>
      <div className="card">

        <ButtonPage  labelText={`${count}`}  parentMethod={countMore} ></ButtonPage>
    
      </div>
    </>
  )
}

export default App
