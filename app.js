import './App.css';
import Letter from './letter/Letter'
import Timer from './timer/Timer';
import Categories from './categories/Categories';
import { useState } from 'react';
function App() {
  const [hide, setHide] = useState(true);
  return (
    <div className="App">
      <div className='App-Section-One'>
        <Letter />
        <Timer setHide={setHide} />
      </div>
      <div className='App-Section-Two'>
        <Categories hide={hide} setHide={setHide} />
      </div>
    </div>
  );
}
export default App;
App.css File…
.App {
  width: 95vw;
  height: 95vh;
  margin: auto;
  display: flex;
  border: 2px solid black;
}
.App-Section-One {
  width: 30%;
}
.App-Section-Two {
  width: 70%;
}
Letter.js File…
import './Letter.css'
import { useState } from 'react'
const Letter = () => {
  const [index, setIndex] = useState(0);
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const changeLetter = () => {
    const randomIndex = Math.floor(Math.random() * letters.length);
    setIndex(randomIndex);
  }
  return(
    <div className='Letter'>
      <div className='Letter-Top'>
        <p>LETTER</p>
        <button onClick={changeLetter} className='Letter-Top-Btn'>Roll Again</button>
      </div>
      <div className='Letter-Display'>
        <h1 className='Letter-Display-H1'>{letters[index]}</h1>
      </div>
    </div>
  );
}
export default Letter;