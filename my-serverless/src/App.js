import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

const App = () => {

  useEffect(async () => {
    try{
      const res = await axios.post('https://dyk1f3qg7e.execute-api.us-east-2.amazonaws.com/dev/user/create',{})
      if(res){
        console.log(res)
      }
      console.log("work")
    }catch(e){
       console.log(e)
    }
      
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is worked
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
