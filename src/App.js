import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Resource from './components/Resource/Resource';
// import Solution from './components/Solution/Solution';

function App() {
  return (
    <BrowserRouter> 
    <Resource/>
    {/* <Solution/> */}
    </BrowserRouter>
    
  );
}

export default App;
