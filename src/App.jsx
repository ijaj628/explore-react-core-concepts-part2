import './App.css'
import Counter from './Countary'
import Team from './Team'
import Users from './User'

function App() {

  function handleClick() {
    alert('button clicked')
  }

  const handleClick2 = () => {
    alert('button 2 clicked')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      {/* <button onclick="handleClick">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => { alert('third clicked') }}>Third</button>
      {/* vajiella */}
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
