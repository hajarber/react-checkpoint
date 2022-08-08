

import React, { useState} from 'react'
import './App.css';

import Header from "./components/Header.js";
import Countdown from './components/Countdown';
import TodoList from './components/TodoList';

function App() {

  const [bgColor,setbgColor]=useState('bg-red-500 ')
  const [color, setColor]=useState('bg-red-700' )
  const [startColor , setStartColor]=useState('text-red-500')
  
  return (
    <div>
    <div className={`${bgColor}`}>
     <Header color={color}/>
     <Countdown className="h-96" setbgColor={setbgColor} bgColor={bgColor} color={color}  setColor={setColor} startColor={startColor} setStartColor={setStartColor}/>
     <TodoList/>
    </div>
    
    </div>
  );
}

export default App;
