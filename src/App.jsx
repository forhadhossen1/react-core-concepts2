
import './App.css'
import Counter from './Counter';
import Players from './Players';
import Users from './Users';

function App() {

  function handleClick () {
    alert ('W0W Sir, congraculation for your marraid life.')
  }

  const handleClick2 = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h2>React core concepts part 2</h2>

      <Users></Users>
      <Players></Players>
      <Counter></Counter>
      <button onClick={handleClick}>WoW</button>
      <button onClick={() => {alert('So sad, for your single life.')}}>SaD</button>
      <button onClick={()=>handleClick2(5)}>JejaL</button>


    </>
  )
}

export default App
