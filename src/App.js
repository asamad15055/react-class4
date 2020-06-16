import React, {useState} from 'react';
import Message from './message.js' ;
import './App.css';

function App() 
{
  
  let [count , setCount] = useState(1) ;
  let [isMorning , setMorning] = useState(true)  ;
  
  return (
    <div className = {`${isMorning ?'dayLight' : 'box'}`}>
      <h2 align = "center"> {isMorning ? 'Morning time' : 'Night time'}</h2>
      <h3>value of counter variable is: {count}</h3>

      <button onClick = {
        () => setCount(++count)
      }>
      Update Counter
      </button>

      <Message counter = {count}></Message>

      <button onClick = {
        () => setMorning(!isMorning)
      }>
        Update day
      </button>
    
    </div>  
  
    );
}
export default App;
