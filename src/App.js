
import React, { useState } from 'react';

import { BrowserRouter ,Routes, Route, Link } from "react-router-dom";
import './App.css';

import Header from './components/Header.js';
import Countdown from './components/Countdown';
import Todolist from './components/Todolist';

function App() {
  const [bgColor, setbgColor] = useState('bg-red-500 ');
  const [color, setColor] = useState('bg-red-600');
  const [startColor, setStartColor] = useState('text-red-500');
  const [inputText, setInputText] = useState('');

  return (
    <div className={`${bgColor}`}>
      <Header color={color} />
      <Countdown
        className="h-96"
        setbgColor={setbgColor}
        bgColor={bgColor}
        color={color}
        setColor={setColor}
        startColor={startColor}
        setStartColor={setStartColor}
      />
      <div className="text-center text-white">#1</div>
      <div className="text-center text-white">Time to focus !</div>
      <Todolist inputText={inputText} setInputText={setInputText} color={color} />
       
    </div>
  );
}

export default App;

