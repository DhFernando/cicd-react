import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

const App = () => {

  useEffect(async () => {
    try{
      const res = await axios.post('user/create',{})
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
          OH no ... Serverless Works :)
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
